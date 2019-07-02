# Tweety

## Introduction

Tweety is a simple project for evaluating potential hires at Alloy. This project mimics the technological stack that is currently in use at Alloy, and we hope that it will serve to evaluate your skills in navigating our codebase, understanding the components of full stack MVC web application architecture, and thoughtfully designing and implementing features.

## Getting Started

Before anything else you should clone this repo to your local machine. Github has great documentation for this process [here](https://help.github.com/articles/cloning-a-repository/). Once the cloning process is finished, `cd` into the project.

### Back end

This project uses the latest versions of Django and Python 3 to run the back end code, which is stored in the `tweety` directory. If you're new to Python and Django, take a moment to read these short articles about how to get set up with a local development environment. Make sure to use Python >=3.6 and not Python 2.

 - [Pyenv](https://github.com/pyenv/pyenv) - This is a great library used to manage different versions of Python. Probably the simplest way to get started installing specific versions.
 - [Installing Python on OS X](https://docs.python-guide.org/starting/install3/osx/#install3-osx) - This is a more manual process for installing Python 3 on your machine.
 - [Using Python Virtual Environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/) - Virtualenvs are a great way to encapsulate a specific set of Python packages for a specific project, just like NPM `/node_modules/` or Ruby gemsets.

To get started running the back end:

 1. Create a virtualenv using Python >=3.6 and activate it.
 2. Install the Python package requirements with `pip install -r requirements.txt`.
 3. Run the Django development server that will serve the back end of the project using `python manage.py runserver`.


### Front end

React, JSX, and SCSS are used for the front end stack. The relevant files are then compiled by Webpack into browser-compatible bundles within the `assets` directory. The Webpack compilation process and development server are run by Node.js, so make sure you have an up-to-date version of Node (^8.9.4) installed on your local machine before beginning the next steps. Information about installing Node can be found [here](https://nodejs.org/en/download/package-manager/). Once you have it installed, you can get started serving the static assets locally:

  1. Install the required Node.js package requirements with `npm install`.
  2. From the root project directory, start the server with `npm run assets`. This will watch for changes to static files in the assets directory and recompile them when changes do occur.
