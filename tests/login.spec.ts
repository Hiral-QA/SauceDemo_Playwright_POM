import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Login with valid username & valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.loginWithValidCred();
});


// test('Footer Text Validation', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.navigate();
// });