import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';
import { ENV } from '../utils/env';

export class LoginPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(ENV.BASE_URL);
    }
    async loginWithValidCred() {
        await this.page.fill(LoginLocators.username, ENV.SAUCE_USERNAME);
        await this.page.fill(LoginLocators.password, ENV.SAUCE_PASSWORD);
        await this.page.click(LoginLocators.loginBtn);
        console.log("Login is done successfully");

    }
}
