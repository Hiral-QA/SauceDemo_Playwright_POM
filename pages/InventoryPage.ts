import { Page, expect } from '@playwright/test';
import { InventoryLocators } from '../locators/InventoryLocators';
import { ENV } from '../utils/env';

export class InventoryPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(ENV.Inventory_URL);
    }

    async verifyProductCount() {
        const count = await this.page.locator(InventoryLocators.inventoryItem).count();
        console.log("Product Count is : " + count);
    }

    async verifyFooter() {
        const footerText = await this.page.locator(InventoryLocators.footer).textContent();
        console.log("Footer Text is : " + footerText);
    }
}
