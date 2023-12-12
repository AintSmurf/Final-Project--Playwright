# Testing Eccomerce Website - Terminal-x
This project demonstrates how to perform automated testing of the Terminal-x website using Typescript , Playwright. It provides a structured framework for testing various functionalities of the Terminal-x website.

# Table of Contents
* [Prerequisites](#prerequisites)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Running Tests](#running-tests)
* [Reporting](#reporting)

# Prerequisites
Before you begin, ensure you have met the following requirements:

* node.js installed

# Project Structure
The project follows a standard playwright project structure and contains the following key directories:
* tests/: test classes , test-related resources
* logic/resources: Configuration files

# Getting Started
Clone this repository to your local machine.

1) Open the project in your preferred IDE.
2) command: npm i  -to install requirements.
3) fill the user-login.json with your credentials.
4) import * as uc from "/infra/resources/user-cred.json" --- replace it with ---  with import * as uc from "/infra/resources/user-login.json"

# Running Tests
You can run the tests using the following methods:

* Run directly from your IDE (Playwright Test for VSCode - must be installed).
* run tests from the command line: 
1) npm run test - ListReport in the console
2) npm run allure - allureReport
3) execute the generateAllureReport.sh with the command: source generateAllureReport.sh - allureReport


# Reporting
* Test results are configured to generate in allure-report. You can find the reports in the /allure-results directory after running the tests.



