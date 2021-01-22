[![Build Status](https://travis-ci.org/plone/create-volto-app.svg?branch=master)](https://travis-ci.org/plone/create-volto-app)

# Deprecation notice

This project is deprecated in favor of the Yeoman-based Volto project generator:

https://github.com/plone/volto/tree/master/packages/generator-volto

Please also refer to the new documentation in:

https://docs.voltocms.com

# create-volto-app

create-volto-app helps you to set up Volto with a single command.

## Installation

Install create-volto-app:

```
$ npm install -g yarn
$ npm install -g @plone/create-volto-app
```

## Usage

Create a new Volto project with:

```
$ create-volto-app myvoltoproject
```

Replace `myvoltoproject` with the name/directory of your Volto project.

Change the directory to your project to get started:

```
$ cd myvoltoproject
```

### Start Volto with `yarn start`

Start Volto with:

````
$ yarn start
````

This runs the project in development mode.
You can view your application at http://localhost:3000

The page will reload if you make edits.

Please note that you have to run a Plone backend as well.

E.g. with docker:

````
$ docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.volto" -e ZCML="kitconcept.volto.cors" -e PROFILES="kitconcept.volto:default-homepage" plone
````

Consult the Volto docs for further details:

https://www.npmjs.com/package/@plone/volto

### Build a production build with `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### Start the production build with `yarn start:prod`

Runs the compiled app in production.

You can again view your application at http://localhost:3000

### Run unit tests with `yarn test`

Runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

### Update translations with `yarn i18n`

Runs the test i18n runner which extracts all the translation strings and generates the needed files.
