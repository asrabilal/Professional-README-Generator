//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensing) {
  let badge = "";
  if (licensing!= "None") {
    badge = "![Licence Badge](https://shields.io/badge/license-" + license + "-blue)"
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensing) {
  let licensingLink;
  switch(licensing){
    case"MIT":
    licensingLink="https://mit-license.org/";
    break;
    case"BSD":
    licensingLink="https://opensource.org/licenses/BSD-3-Clause";
    break;
    case"GLP":
    licensingLink="https://www.gnu.org/licenses/gpl-3.0.en.html";
    break;
    case"Apache":
    licensingLink="https://www.apache.org/licenses/LICENSE-2.0";
    break;
    default:
      licensingLink = "";
  }
  return licensingLink;
}

//  Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensing) {
  let licensingSect="";
  if (licensing!="None") {
    licensingSect += "## Licensing\n"
    licensingSect += "Details" + renderLicenseLink + "to get information for this licensing\n";
  }
  return licensingSect;

}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Additional Info](#additional-info)
 

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions
  [HERE](https://github.com/${data.username})\n
   
  
  ## Additional Info:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;


