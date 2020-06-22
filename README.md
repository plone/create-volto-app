[![Build Status](https://travis-ci.org/plone/create-volto-app.svg?branch=master)](https://travis-ci.org/plone/create-volto-app)

# create-volto-app

create-volto-app is a Yeoman generator that helps you to set up Volto with a single command.

## Installation

Install create-volto-app:
First, install [Yeoman](http://yeoman.io) and generator-create-volto-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```
$ npm install -g yo
$ npm install -g generator-create-volto-app
```

## Usage

Create a new Volto project with:

```
$ yo create-volto-app
```

This will bootstrap a new Volto project inside the current folder. It will ask
a few questions: project name, project description and a list of addons. Run:

```
$ yo create-volto-app --help
```

to see a full list of options and arguments.

You can use it in full non-interactive mode by passing something like:

```
yo create-volto-app myvoltoproject --description "My Volto project" --skip-addons --skip-install
```

You can also specify addons to load, like:

```
yo create-volto-app myvoltoproject --description "My Volto project" --addon "volto-formbuilder:x,y" --addon "volto-slate:z,t"
```

Change the directory to your project to get started:

```
$ yarn
$ cy myvoltoproject
```

### Start Volto with `yarn start`

Start Volto with:

```
$ yarn start
```

This runs the project in development mode.
You can view your application at http://localhost:3000

The page will reload if you make edits.

Please note that you have to run a Plone backend as well.

E.g. with docker:

```
$ docker run -it --rm --name=plone -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.volto" -e ZCML="kitconcept.volto.cors" -e PROFILES="kitconcept.volto:default-homepage" plone
```

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
