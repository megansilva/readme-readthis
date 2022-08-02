// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  // let license = '';

  if (license !="None") {
    license = "![License Badge]()"
  }

  return license;
}

function renderLicense(license) {
  if (license === 'MIT') {
    license = "![MIT](https://img.shields.io/badge/MIT-License-green)"
  } else if (license === 'GPL') {
    license = "![GPL](https://img.shields.io/badge/GPL-License-blue)"
  } else if (license === 'BSD 3') {
    license = "![BSD 3](https://img.shields.io/badge/BSD%203-License-orange)"
  } else if (license === 'Apache 2.0') {
    license = "![Apache 2.0](https://img.shields.io/badge/Apache%202.0-License-red)"
  } else {
    license = ''
  }

  return license;
}

function renderLicensesPart(license) {
  let licensesPart = "";

  if (license != "None") {
    licensesPart += "## License/"
    licensesPart += "" + renderLicense(license) + "License Informtaion";
  }

  return licensesPart
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Contribute](#contribute)
  - [Dependencies](#dependencies)
  - [License](#license)
  - [Test](#test)
  - [Benefits](#benefits)
  
  ## Dependecies
  ${data.dependencies}
  
  ## Contribte
  ${data.contribute}
  
  ${renderLicensesPart(data.License)}
  
  ## Test
  ${data.test}
  
  ## Benefits
  ${data.benefits}
  
`;
}

module.exports = generateMarkdown