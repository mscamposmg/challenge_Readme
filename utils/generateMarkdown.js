// const inquirer = require("inquirer");
// const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU') {
    return `https://choosealicense.com/licenses/gpl-2.0/`
  }
  if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  } 
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    The code is licensed under the ${license} license. If you have any questions about the license just make yourself confortable to ask.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.description}

  ## Name
  ${data.author}

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;

