const path = require('path');
const projectRootPath = __dirname;
const packageJson = require(path.join(projectRootPath, 'package.json'));

// Extends ESlint configuration for adding the aliases to `src` directories in Volto addons
const addonsAliases = [];
if (packageJson.addons) {
  const addons = packageJson.addons;
  addons.forEach(addon => {
    const addonPath = `${addon}/src`;
    addonsAliases.push([addon, addonPath]);
  });
}

module.exports = {
  extends: `${projectRootPath}/node_modules/@plone/volto/.eslintrc`,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@plone/volto', '@plone/volto/src'],
          ...addonsAliases,
          ['@package', `${__dirname}/src`],
          ['~', `${__dirname}/src`],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
