// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return ``
  }
  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

function generateMarkdown(data) {
  return `
   
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  

  ${data.tableOfContents}
  

  ## Installation Instructions
  
  ${data.installation}
  
  ## Usage Information
  
  ${data.usage}
  
  ## License
  ${data.license}
    
  ${renderLicenseBadge(data.license)}

  ## Contribution Guidelines
  
  ${data.contributing}
  
  ## Test Instructions
  
  ${data.test}
  
  ## Questions
  
  ${data.questions}

  GitHub Link: https://www.github.com/${data.github}.

  For additional questions, you may contact me at ${data.email}!
  `;
}

module.exports = generateMarkdown;