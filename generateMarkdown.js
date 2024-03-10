function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, please contact ${data.github} at ${data.email}.
`;
}

module.exports = generateMarkdown;
