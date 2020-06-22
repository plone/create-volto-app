'use strict';

const path = require('path');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const utils = require('./utils');

const currentDir = path.basename(process.cwd());

const validateAddonName = name => {
  if (!name) return false;

  const bits = name.split(':');
  const pkgName = bits[0];

  // FUTURE: test for some simple sanity, like no space in addon name, etc
  if (!pkgName) return false;

  return true;
};

const addonPrompt = [
  {
    type: 'input',
    name: 'addonName',
    message:
      'Addon name, plus extra loaders, like: volto-addon:loadExtra,loadAnotherExtra',
    default: '',
    validate: validateAddonName,
  },
  {
    type: 'prompt',
    name: 'useAddons',
    message: 'Would you like to add another addon?',
    default: true,
  },
];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('projectName', {
      type: String,
      default: currentDir,
    });
    this.option('skip-addons', {
      type: Boolean,
      desc: "Don't ask for addons as part of the scaffolding",
    });
    this.option('addon', {
      type: arr => arr,
      desc:
        'Addon loader string, like: some-volto-addon:loadExtra,loadOtherExtra',
    });
    this.option('description', {
      type: String,
      desc: 'Project description',
    });

    this.args = args;
    this.opts = opts;
  }

  async prompting() {
    this.log(chalk.red('Getting latest Volto version'));
    const voltoVersion = await utils.getLatestVoltoVersion();

    this.log(chalk.red("Retrieving Volto's yarn.lock"));
    this.voltoYarnLock = await utils.getVoltoYarnLock(voltoVersion);

    this.log(`Using latest released Volto version: ${voltoVersion}`);
    this.globals = {
      addons: [],
      voltoVersion,
    };

    let props;

    if (!!this.args[0]) {
      this.globals.projectName = this.args[0];
    } else if (this.opts.addon) {
      this.globals.projectName = path.basename(process.cwd());
    } else {
      props = await this.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'Project name',
          default: path.basename(process.cwd()),
        },
      ]);
      this.globals.projectName = props.projectName;
    }

    if (this.opts.description) {
      this.globals.projectDescription = this.opts.description;
    } else {
      props = await this.prompt([
        {
          type: 'input',
          name: 'projectDescription',
          message: 'Project description',
          default: 'A Volto-powered Plone frontend',
        },
      ]);
      this.globals.projectDescription = props.projectDescription;
    }

    if (this.opts.addon) {
      this.globals.addons = JSON.stringify(this.opts.addon);
    } else {
      if (!this.opts['skip-addons']) {
        props = await this.prompt([
          {
            type: 'prompt',
            name: 'useAddons',
            message: 'Would you like to add addons?',
            default: true,
          },
        ]);
        while (props.useAddons === true) {
          /* eslint-disable no-await-in-loop */
          props = await this.prompt(addonPrompt);
          this.globals.addons.push(props.addonName);
        }

        this.globals.addons = JSON.stringify(this.globals.addons);
      } else {
        this.globals.addons = JSON.stringify([]);
      }
    }
  }

  writing() {
    const base =
      currentDir === this.globals.projectName ? '.' : this.globals.projectName;
    this.fs.copyTpl(
      this.templatePath('package.json.tpl'),
      this.destinationPath(base, 'package.json'),
      this.globals,
    );

    this.fs.write(this.destinationPath(base, 'yarn.lock'), this.voltoYarnLock);

    this.fs.copy(this.templatePath(), this.destinationPath(base), {
      globOptions: {
        ignore: ['**/*.tpl', '**/*~'],
      },
    });
  }

  install() {
    if (!this.opts['skip-install']) {
      const base =
        currentDir === this.globals.projectName
          ? '.'
          : this.globals.projectName;
      this.yarnInstall(null, { cwd: base });
    }
  }

  end() {
    this.log("Done. Now run 'yarn' to install dependencies");
  }
};
