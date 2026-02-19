# Playwright Automation Framework - SauceDemo

This repository contains a **Playwright + Page Object Model (POM)** framework for automating [SauceDemo](https://www.saucedemo.com/) website test scenarios.

---

## **Project Overview**

- Framework Type: **Playwright + POM**
- Features:
  - Login & session storage for reuse
  - Inventory page validations
  - Footer, product count, and other UI checks
  - Reusable page objects
  - Screenshots & video recording of failed tests
- Reports: HTML report generation

---

## **Prerequisites**

Before running the project, ensure you have:

- Node.js >= 18
- npm installed
- Git installed
- Internet access (for installing dependencies and running tests)

---

## **Project Setup**

1. **Clone the repository**
``` 
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
Install dependencies

npm install
Install Playwright browsers

npx playwright install
Create .env file (store URL & credentials)

env
 
BASE_URL=https://www.saucedemo.com/
USERNAME=standard_user
PASSWORD=secret_sauce
Running the Project

1. Generate Session Storage (Login once)
To save session/cookies for reuse in other tests:
npx playwright test tests/auth.setup.ts
This will log in once and store the session, so other tests don’t need to log in repeatedly.

2. Run all tests

npx playwright test

3. Run a specific test
 
 
npx playwright test tests/inventory.spec.ts

4. Run tests in headed mode (see browser)
 
 
npx playwright test --headed

5. Run tests with slow motion (for debugging)
npx playwright test --headed --slow-mo=500
Test Reports
Screenshots & Videos: Failed test screenshots and videos are saved in test-results/

HTML Reports: Generate and view reports:
npx playwright show-report
