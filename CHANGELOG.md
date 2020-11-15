# Change Log

## 6.5.1 (unreleased)

### Added

- Upgrade to Volto 9 @sneridagh

### Internal

- Move to GitHub actions @sneridagh

## 6.5.0 (2020-11-04)

### Added

- Support Node 14 @sneridagh

## 6.4.0 (2020-10-15)

### Added

- Don't export empty addonReducers and addonRoutes in default config.js @tiberiuichim
- Improve .eslintrc in volto-starter-kit to cover addons and more editor linting integration scenarios @tiberiuichim
- Alias `load-volto-addons` to jest-addon-loader.js in package.json @tiberiuichim

## 6.3.0 (2020-10-14)

### Added

- Added `@babel/core` to the project build deps to avoid yarn hoisting issues @sneridagh

## 6.2.4 (2020-08-05)

### Added

### Changes

- Upgrade Volto to 7.7.0 @iFlameing @timo
- Improve default integration with addons @tiberiuichim
- Improve .eslintrc in volto-starter-kit to cover more editor linting integration scenarios @tiberiuichim

## 6.2.3 (2020-06-19)

### Changes

- Remove volto-starter-kit git submodule @iFlameing

## 6.2.1 (2020-06-16)

### Changes

- Re-release 6.2.0 @timo

## 6.2.0 (2020-06-16)

### Added

- Support for Volto 6.2.0 @timo

## 6.0.0 (2020-05-18)

### Added

- Support for Volto 6.0.0 @sneridagh

### Changes

## 5.1.0 (2020-05-10)

### Added

- Add remove `.eslintrc` in favor of `.eslintrc.js` that creates an alias to the inner `src` folder for each addon in the `addons` list @sneridagh

## 5.0.0 (2020-04-17)

### Added

- Bump for final release 5.0.0 @sneridagh
- Add fix for issue while running tests with a built Plone local environment, patching Razzle for that @sneridagh

## 4.0.0 (2020-03-01)

### Added

- Support for final release 4.0.0 @sneridagh

## 4.0.0-alpha.8 (2020-01-23)

### Added

- New language translation for pt @sneridagh

### Changes

- Bump to alpha 31 @sneridagh

## 4.0.0-alpha.7 (2019-12-20)

### Added

- New language translations to locales @sneridagh

### Changes

- Bump to alpha 19 @sneridagh

## 4.0.0-alpha.6 (2019-12-18)

### Changes

- Include `yarn.lock` to template @sneridagh

## 4.0.0-alpha.5 (2019-12-16)

### Changes

- Bump to alpha 18, rebuild yarn.lock @sneridagh
- Add Japanese translation to the template @sneridagh

## 4.0.0-alpha.4 (2019-12-03)

### Changes

- Pin the Guillotina docker image @sneridagh
- Bump version to alpha 17, rebuild yarn.lock @sneridagh

## 4.0.0-alpha.3 (2019-11-24)

### Changes

- Bump and release version for Volto 4 alpha 14 @sneridagh

## 4.0.0-alpha.2 (2019-11-01)

### Changes

- Bring back resolutions for override webpack-dev-server version, due to unwanted messages in the console @sneridagh

## 4.0.0-alpha.1 (2019-11-01)

### Changes

- Fixed issue when the install command does not install @alpha versions @sneridagh

## 4.0.0-alpha.0 (2019-11-01)

### Changes

- Bump and release first version compatible with Volto 4 alpha 10 @sneridagh

## 3.2.1 (2019-10-16)

### Changes

- Fix bogus release @sneridagh

### Internal

- Fix Cypress tests failing @sneridagh
- Add retries to Cypress @sneridagh

## 3.2.0 (2019-10-16)

### Changes

- Fixed `webpack-dev-server` being verbose launching dev server `yarn start` and leading to confusion @sneridagh

### Internal

- Update release-it @sneridagh

## 3.1.0 (2019-06-14)

- Bump to use Volto 3.1.0 @sneridagh

## 3.0.5 (2019-05-30)

- Bump to use Volto 3.0.4 @sneridagh

## 3.0.4 (2019-05-13)

- Bump to use Volto 3.0.3 @sneridagh

## 3.0.3 (2019-05-10)

- Bump to use Volto 3.0.2 @sneridagh

## 3.0.2 (2019-05-10)

- Better direct dependency tree, not depend in cypress and other tools @sneridagh

## 3.0.1 (2019-05-10)

- Bump to use Volto 3.0.1 @sneridagh

## 3.0.0 (2019-05-10)

- Bump to use Volto 3.0.0 @sneridagh
- Use Cypress instead of RF for acceptance tests @sneridagh

## 2.1.3 (2019-04-17)

- Bump to use Volto 2.1.3 @sneridagh

## 2.1.1 (2019-04-04)

- Bump to use Volto 2.1.1 @sneridagh

## 2.1.0 (2019-04-02)

- Bump to use Volto 2.1.0 @sneridagh

## 2.0.0 (2019-03-25)

- Bump to use Volto 2.0.0 @sneridagh

## 1.10.0 (2019-03-25)

- Bump to use Volto 1.10.0 @sneridagh

## 1.8.3 (2019-03-21)

- Add `main` section to theme.config @sneridagh

## 1.8.2 (2019-03-21)

- Bump to Volto 1.8.2 @sneridagh

## 1.8.1 (2019-03-19)

- Bump to Volto 1.8.1 @sneridagh

## 1.8.0 (2019-03-15)

- Bump to Volto 1.8.0 @sneridagh

## 1.7.0 (2019-03-04)

- Bump to Volto 1.7.0 @sneridagh

## 1.6.1 (2019-03-01)

- Bump to Volto 1.6.1 @sneridagh

## 1.6.0 (2019-03-01)

- Override, remove .npmignore and add .gitignore in npm package @nileshgulia1
- Bump to Volto 1.6.0 @sneridagh

## 1.5.2 (2019-02-20)

- Improve metadata in package.json @davilima6
- Add .gitignore to npm package @nileshgulia1
- Bump Volto to 1.5.2 @sneridagh

## 1.5.1 (2019-02-19)

- Add missing extras to boilerplate @sneridagh

## 1.5.0 (2019-02-19)

- Add .npmignore for exclude volto-stater-kit .git from the packaging
  @sneridagh
- Bump Volto to 1.5.0 @sneridagh

## 1.4.0 (2019-02-15)

- Improve eslint resolvers for special paths (@package, @plone/volto and ~), so
  IDEs do not complain any more with no-unresolved active @sneridagh
- Add stylint recommended config to the boilerplate @sneridagh
- Bump Volto to 1.4.0 @sneridagh

## 1.3.0 (2019-02-13)

- Update to 1.3.0 @sneridagh

## 1.2.1 (2019-02-04)

- Add Travis using RF tests from Volto @sneridagh
- Fix test setup (changes in boilerplate) @sneridagh
- Loosen node version requirements (changes in boilerplate) @sneridagh
- Bump Volto to 1.2.1 @sneridagh

## 1.2.0 (2019-01-22)

- Updated boilerplate and use Volto to 1.2.0 @sneridagh

## 1.1.1 (2018-12-24)

- Fix brownbag release @sneridagh

## 1.1.0 (2018-12-24)

### Changed

- Updated boilerplate and use Volto to 1.1.0 @sneridagh

## 1.0.0 (2018-10-31)

### Changed

- Updated boilerplate @robgietema

## 0.1.1 (2018-10-25)

### Changed

- Updated Volto to 0.9.5 @robgietema

## 0.1.0 (2018-10-17)

### Added

- Basic implementation of Create Volto App @nileshgulia1
