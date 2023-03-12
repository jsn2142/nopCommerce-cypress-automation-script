# nopCommerce-cypress-automation-script
This repository contains automated test scripts for testing a web application using the Cypress testing framework.

### Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install the necessary dependencies
   ```sh
   npm install
   ``` 
3. Install Cypress
   ```sh
   npm install cypress --save-dev
   ``` 
4. Install Cypress reporter, using Terminal install cypress-mochawesome-reporter, with command
   ```sh
   npm i --save-dev cypress-mochawesome-reporter
   ```
5. Configure Support e2e.js. Navigate to cypress/support/e2e.js, and add the import statement using the command below. [Already added to e2e.js in this repo]
   ```sh
   import 'cypress-mochawesome-reporter/register'
   ```
4. Open the Cypress Test Runner.
   ```sh
   npx cypress open
   ```
5. Click on a spec file to run the associated tests. 
6. Generate Mochaawesome reports of all the specs and video recording of all of them
   ```sh
   npx cypress run --e2e
   ```
