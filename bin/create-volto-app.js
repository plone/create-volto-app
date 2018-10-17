#! /usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const lib = require('..');
const pkg = require('../package.json');

const messages = lib.messages;
const createVoltoApp = lib.createVoltoApp;

let projectName;

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(function(name) {
    projectName = name;
  })
  .allowUnknownOption()
  .on('--help', messages.help)
  .parse(process.argv);

createVoltoApp({
  projectName,
});
