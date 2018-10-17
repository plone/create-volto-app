'use strict';

const createVoltoApp = require('./lib');
const messages = require('./lib/messages');

module.exports = {
  messages: messages,
  createVoltoApp: createVoltoApp,
};
