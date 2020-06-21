"use strict";

const path = require("path");
const Generator = require("yeoman-generator");
const utils = require("./utils");

// Const chalk = require("chalk");

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
  constructor(args, opts) {
    super(args, opts);
    this.argument("projectName", {
      type: String,
      default: path.basename(process.cwd())
    });
    this.option("addon", {
      type: arr => arr,
      desc:
        "Addon loader string, like: some-volto-addon:loadExtra,loadOtherExtra"
    });

    console.log("opts", opts);
  }

  async prompting() {
    // This.log(`${chalk.red("Volto")} project scaffolding`);

    this.log("Getting latest Volto version");
    const voltoVersion = await utils.getLatestVoltoVersion();

    this.log("Retrieving Volto's yarn.lock");
    this.voltoYarnLock = await utils.getVoltoYarnLock(voltoVersion);

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

    this.fs.write(this.destinationPath("yarn.lock"), this.voltoYarnLock);

    // This.fs.copy(
    //   this.templatePath("dummyfile.txt"),
    //   this.destinationPath("dummyfile.txt")
    // );
  }

  install() {
    // This.yarnInstall();
  }
};
