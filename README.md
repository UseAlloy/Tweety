# Tweety

## Introduction

Tweety is a simple project for evaluating potential hires at Alloy. This project mimics the technological stack that is currently in use at Alloy, and we hope that it will serve to evaluate your skills in navigating our codebase, understanding the components of full stack MVC web application architecture, and thoughtfully designing and implementing features.

## Getting Started

### Backend

Daffy uses the latest versions of Django and Python 3 to run. If you're new to Python and Django, take a moment to read these short articles about how to get set up with a local development environment. Make sure to use Python >= 3.6 and not Python 2.

 - [Installing Python on OS X](http://docs.python-guide.org/en/latest/starting/install/osx/)
 - [Installing Python on Windows](http://docs.python-guide.org/en/latest/starting/install/win/)
 - [Using Python Virtual Environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/)

Once you have virtualenv and/or virtualenvwrapper installed, create a new virtualenv for this project. Then, clone this repository onto your local machine and `cd` into the project directory. You can install this project's Python package requirements using the command `pip install -r requirements.txt`, and then set the Django environment by copying the `.env.example` file in the root project directory to `.env`.

After the project's required packages have been installed, you can run this project locally using the command `python manage.py runserver_plus`.

### Frontend

The static assets are compiled by Webpack within the `assets/` directory.

Webpack comes with an easy to use static file server for local development.

  1. Install the required `node_modules/` for this project with `npm install`.
    - When running `npm install` on OS X, there is a bug that has been encountered in the past dealing with `node-gyp rebuild`, where node complains about a missing `libzmq.pc` file. If you haven't installed `zeromq`, do a `brew install zeromq`. Then, you probably have to find the `pkgconfig` directory in `/usr/local/Cellar/zeromq/<version>/lib` and set the `PKG_CONFIG_PATH` environment variable to that `pkgconfig` directory path. Running `npm install` should now work.
    - This also might not work if the `pkg-config` package is not installed on your system. This can be remedied by running `brew install pkg-config`.
  2. Then, from the root project directory, start the server with `node assets/server.js`. This will watch for changes to static files in the assets directory and recompile them when changes do occur.

### Requirement Versions

Getting setup with this project can be a pain if you're not using the correct versions of the required software. Daffy currently builds using:

  - Python ^3.6.5
  - Node ^8.9.4
  - NPM ^3.10.10

If you're experiencing issues setting up the project locally and your software versions do not match the versions above, try upgrading your local software and seeing if that fixes the problem.
