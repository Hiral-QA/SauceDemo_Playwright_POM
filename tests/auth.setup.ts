import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('Login once and save session', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.loginWithValidCred();

    // Save logged-in session
    await page.context().storageState({ path: 'storage/auth.json' });
});