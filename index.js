// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badge = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    UNLICENSE:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)WTFPL',
    APACHE:'[![License:APACHE](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  if (license) return (Badge); 

}  { return console.log('')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  MIT:'[![License](https://opensource.org/licenses/MIT)'
  UNLICENSE:'[![License](http://unlicense.org/)WTFPL'
  APACHE:'[![License](https://opensource.org/licenses/Apache-2.0)'
  GNU:'[![License](http://unlicense.org/)'
  }
  if (license) {return (renderLicenseLink);
  }  {return ('')
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return 'Lincesed under the ${this.renderLicenseLink(licence)}';
} else {return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ##Table of content
  -[Title](#Title)
  -[Installation](#Installation)
  -[Application](#Application)
  -[Questions](#Questions)
  -[License](#License)
  [Contributing](#Contributing)

  ## Description
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Installaton
  ${answers.installation}

  ## Contributing
  ${answers.contributing}
  
  ## Questions
  ${answers.github}
  ${answers.email}

  ## License
  ${this.renderLicenseSection(answers.license)}
`;
}

module.exports = generateMarkdown;}
