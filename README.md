
# Jupiter Cloud Platform Automation Implementation with Cypress

This repository contains the automated tests written for end-to-end test cases using Cypress Automation Framework with a BDD Cucumber Integration.

Follow the guide to explore the project!

Let's get started!

## Getting Started

You may need to meet the Pre-requisites before you make your project up and running in your local environment.

### Pre-requisites

#### Step 1: Choose the OS

Below are the System Requirements for Operating System to run Cypress.

- IF you are on a macOS, it supports 10.9 and above (64-bit only)
- IF you are on a Linux Ubuntu, it supports 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- IF you are on a Windows, it supports 7 and above

#### Step 2: Install NodeJS

Behind Cypress is a Node.js server process.
You should have NodeJS 8 or above installed.

##### Download and Installation

• 16.13.1 LTS or current from [https://nodejs.org/en/](https://nodejs.org/en/)  
• Install all additional tools when prompted on installer.

_(You can choose the required, node installer for your platform from here - https://nodejs.org/en/download/ )_

Once the installation is completed, verify whether NodeJS has been successfully installed, by running this command in the terminal.

`node -v`

This will preview the node version.

#### Step 3: Choose your IDE

Recommend to use Visual Studio Code (download: https://code.visualstudio.com/download)
But you may use any of the IDEs to continue your scripting which supports Java scripts source codes! E.g. IntelliJ , Eclipse

#### Step 4: Choose the Programming Language

- JavaScript
- Gherkin

## Setting up

Let's fork this project in `Github`, run below commands in the terminal.

#### Step 1: Traverse to the Directory

By using the terminal, traverse to the destination directory, where you need to clone the project.

#### Step2: Clone Repository

`git@github.com:rashmi-sandarekha/PlanitTestPortal.git`

2.1. cd into the cloned repo
`cd PlanitTestPortal`

#### Step 3: Install npm

3.1. install the node_modules
`npm i`

3.2. Check npm version:
`npm -v`

## Run Tests

Test can be run in two methods.

1. Cypress GUI Runner
2. Headless Mode

#### 1. Cypress GUI Runnner

`npm run cy:open`

Then Cypress GUI Runner will be open.

You can see below `feature` tests are listed on the GUI Runner. Click any of each tests feature files, to run on the Runner, that will preview on the automated browser.

- contactUs.feature
- shop.feature

#### 2. Headless Mode

`npm run cy:run` will run the all the available tests in the Headless mode.

## Reports

Reports have not been enabled yet, but we can enable the mochawesome reports with Cypress.

Go to the file and view the html files to see the detailed reports.

## File Extensions

- .js
- .feature
- .json
  Tests are written above file extensions.

## Folder Structure

#### cypress

All the tests files and `properties.json` file, will be included in, cypress folder.

#### integration

This folder contains all the step definitions for actions and assertions of each test.

1. `integration/common` - The step definitions for actions and assertions, which can be re-used in any feature file.

- <moduleName>.actions.js
- <ModuleName>.assertions.js

2. `Integration`
3. This contains the feature files - Feature Files contain the Test Cases for each Acceptance Critera on each User Story.

- contactUs.feature
- shop.feature

#### fixtures

This folder contains all external pieces of static test data files in `.json` formats.
E.g. test image files, network resonse data etc;

#### support

By default Cypress will automatically include the support file and `cypress/support/commands.js` and `cypress/support/index.js`. This file runs **before** every single spec file.

#### plugins

The plugins files are a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution.

## Framework Optimizations

The default Cypress Framework has optimized in few aspects:

#### 1. Package JSON

The test run commands are appended in the `scripts` in `package.json`

#### 2. Cucumber with Gherkin

The default Cypress does not include Cucumber and, this has optimized the BDD Framework using Cucumber- Gherkin.


#### 3. Folder Structre

Folder Strucure has been customized inside the default Cypress Framework.

#### 5. Feature Files

The alias for feature files are mentioned for the `setup` actions and assertions. The main purpose of adding these `alias` is to refer the step definitions easily via the feature files.
E.g. If any Gherking criteria is prefixed with the alias as `setup` , the criteria can be referred in any of the `setup.actions.js` or `setup.assertions.js` and it will be supporting for easy code maintenance.

## Test Results

Here with the test results of the test executions:

### contactUs
![contactUs](https://i.ibb.co/7yHksmT/Screenshot-2022-08-02-at-10-04-48-AM.png)
  

### shop
![shop](https://i.ibb.co/FxvY4Cf/Screenshot-2022-08-02-at-10-05-34-AM.png)



## Assumptions

1. Flaky Tests - There can be flaky tests which can be occurred due to network slowness.
   You may re-run the test suites , if anything failes with a time out.

## Remarks
None

## Suggestions

The framework can be further enhanced in below areas. Did not address them due to time constraints.

#### 1. Page Objects

All the data test Ids (CSS locators) can be wrapped up in to variables and maintain the Page Objects on each Screen. 

#### 2. Add Negative and Alternative Scenarios

There are so many scenarios observed in the application.
For and example below coverage can be addressed using Cypress. 2. Functional Testing - There are expolatory testing which can be done. E.g. Negative Scenarios 3. Field Validation - Field Validation can be further addressed with Cypress. E.g. Boundary Value Analysis, Field Type, Input Type, Default Values, Input Format etc; 4. UI - This is something we can have from Cypress as an added advantage than other Automation Framworks. Because Cypress supports for Resposiveness Testing where we can use with `ViewPort`

#### 3. Meta Tests (Unit Tests)

Meta Tests on validating the css locatror availibility on each page can be addressed using meta tests in Cypress which will cover more 90% of unit tests.

#### 4. Folder Structure

We can further improve the folder structure in a comprehensive manner.
E.g. Split the `<featureName.actions.js>` files in to "Actions" folder and `<featureName.assertions.js> ` files in to "Assertions" folder

#### 5. API Assertions

API assertions are also included in some tests.


Likewise, we can include the API level assertions on any of the relevant scenarios for further verification purposes
  
  ## Continues Integration with Jenkins
  Currently this has been setup locally for demo purpose. 

## FAQ:

- **Why do the tests cannot be run in Safari?**
  Cypress does not support for Safari Browser.

- **Why alternative flows are not covered?**
  Due to time constraints and it has covered only the Acceptance Criteria which are mentioned in the assignment.

- **Why some test cases are not done with front end validations, but API assertions**
  To share additional context about Cypress API level validations. Now you know that it can be done with API level assertions as well.
  For an instance, there are few test cases added with API assertions.
 

- **Can't we add the Front end data validations instead of API level assertions?**
  Of course yes! We can do the front end data validations easily than the API level assertions.
  There are some tests added using the front end data validations.


## References:

https://www.cypress.io/

## Author

Rashmi Sandarekha

- LinkedIn: [linkedin.com/in/rashmisandarekha](https://www.linkedin.com/in/rashmisandarekha)
- Email: rashmisandarekha@gmail.com
- Medium: https://rashmisandarekha.medium.com/
