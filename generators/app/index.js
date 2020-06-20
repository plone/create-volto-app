"use strict";

const path = require("path");
const https = require("https");
const Generator = require("yeoman-generator");
// Const chalk = require("chalk");
//
const validateAddonName = name => {
  if (!name) return false;

  const bits = name.split(":");
  const pkgName = bits[0];

  if (!pkgName) return false;

  return true;

  // If (bits.length > 1) {
  //   extraLoaders = bits[1];
  //   const loaders = extraLoaders.split(",");
  //   // TODO: test for some simple sanity, like no space in addon name, etc
  //   // Better to use a regexp?
  // }
};

/*
 * Retrieves Volto's yarn.lock directly from github
 */
function getVoltoYarnLock(version, callback) {
  // https://raw.githubusercontent.com/plone/volto/6.2.0/yarn.lock
  const url = `https://raw.githubusercontent.com/plone/volto/${version}/yarn.lock`;
  https
    .get(url, resp => {
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });
      resp.on("end", () => {
        callback(data);
      });
    })
    .on("error", err => {
      this.log("Error in retrieving Volto's yarn.lock: " + err.message);
    });
}

/*
 * Retrieves latest Volto released version from NPM registry
 */
async function getLatestVoltoVersion() {
  // Curl -H "Accept: application/vnd.npm.install-v1+json"
  const url = "https://registry.npmjs.org/@plone/volto";
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        { headers: { Accept: "application/vnd.npm.install-v1+json" } },
        resp => {
          let data = [];
          resp.on("data", chunk => {
            data.push(chunk);
          });
          resp.on("end", () => {
            const res = JSON.parse(data.join(""));
            resolve(res["dist-tags"].latest);
          });
        }
      )
      .on("error", err => {
        reject(err.message);
      });
  });
}

// This.log("Error in retrieving Volto's yarn.lock: " + err.message);
//
const basicPrompt = [
  {
    type: "input",
    name: "projectName",
    message: "Project name",
    default: path.basename(process.cwd())
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Project description",
    default: "A Volto-powered Plone frontend"
  },
  {
    type: "prompt",
    name: "useAddons",
    message: "Would you like to add addons?",
    default: true
  }
];

const addonPrompt = [
  {
    type: "input",
    name: "addonName",
    message:
      "Addon name, plus extra loaders, like: volto-addon:loadExtra,loadAnotherExtra",
    default: "",
    validate: validateAddonName
  },
  {
    type: "prompt",
    name: "useAddons",
    message: "Would you like to add another addon?",
    default: true
  }
];

module.exports = class extends Generator {
  async prompting() {
    // This.log(`${chalk.red("Volto")} project scaffolding`);

    const voltoVersion = await getLatestVoltoVersion();
    this.log(`Using latest released Volto version: ${voltoVersion}`);
    this.globals = {
      addons: [],
      voltoVersion
    };

    let props = await this.prompt(basicPrompt);
    this.globals.projectName = props.projectName;
    this.globals.projectDescription = props.projectDescription;

    while (props.useAddons === true) {
      /* eslint-disable no-await-in-loop */
      props = await this.prompt(addonPrompt);
      this.globals.addons.push(props.addonName);
    }

    this.globals.addons = JSON.stringify(this.globals.addons);

    // Return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    //   console.log("props", props);
    //   this.prompt(nextPrompt).then(props => {
    //     console.log("next props", props);
    //   });
    // });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package.json.tpl"),
      this.destinationPath("package.json"),
      this.globals
    );
    // This.fs.copy(
    //   this.templatePath("dummyfile.txt"),
    //   this.destinationPath("dummyfile.txt")
    // );
  }

  install() {
    // This.yarnInstall();
  }
};
