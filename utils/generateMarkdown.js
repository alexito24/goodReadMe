// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
  let license = license
  } else {
    message = ""
  }
}
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
  let license = license
  } else {
    message = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
  let license = license
  } else {
    message = ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Plug userReponses into table of contents
  let draftTable = `## Table of Contents`;

  if (data.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (data.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (data.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
  // Create title and description
  // Generate badges
  let draftMarkdown = 
  `# ${data.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) 
  
  
  ## Description 
  
  
  ${data.description}
  `
  // Add table of contents data to markdown
  draftMarkdown += draftTable;
  
  // Add license section to markdown
  draftMarkdown += `
  * [License](#license)`;

  // Create installation section
  if (data.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${data.installation}`
  };

  // Create usage section
  if (data.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${data.usage}`
  };
  
  // Create contribution section
  if (data.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${data.contributing}`
  };

  // Create tests section
  if (data.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${data.tests}`
  };

  // Connect userResponses to license section
  draftMarkdown +=
  `
  
  ## License
  
  ${data.license}
  `;

  // Questions section
  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${data.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${data.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (data.email !== null) {
  
  draftDeveloper +=
  `
  Email: ${data.email}
  `};

 // Add developer section to markdown
  draftMarkdown += draftDeveloper;

  // Return markdown
  return draftMarkdown;
};

module.exports = generateMarkdown

