//Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  ## Project Description
  ${data.description}
  ## Table of Contents
  1. [Usage](#usage)
  2. [Questions](#Questions)
  3. [Credits](#credits)
  4. [Testing Instructions](#tests)
  5. [License](#license) ${renderLicenseBadge(data.license)}
  
  ## Installation Instructions
  ${data.installation}
  ## Languages
  ${data.languages}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions
  Contact me via my github profile or email address (links below)
  1. Email address: ${data.email}
  2. Github Username: [${data.username}](https://github.com/${data.username})
  
`;
};

// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")`;
  }
};

// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return ` [License: ${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
};

// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "";
  } else {
    return ` ## License
  For more information on the License, click on the link below. `;
  }
};

//exports generateMarkdown function
module.exports = generateMarkdown;
