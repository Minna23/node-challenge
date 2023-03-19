// function to generate markdown for README
function renderLicenceBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return''
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenceBadge(data.license)}

  ### Description
  ${data.description}

  ## Table of content
  * [Description](#description)
  * [Technologies](#technologies)
  * [Link to the deployed application](#deployed)
  * [Github username](#github)
  * [Email address](#email)
  * [Command to run the test](#test)

  ### Technologies
  ${data.technologies}

  ### Link to the deployed application
  ${data.deployed}

  ### Github username:
  ${data.github}

  ### Email address:
  ${data.email}

  ### Command to run the test:
  ${data.test}


You can find more of my work at [${data.github}](https:github.com/${data.github}).
You can contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
