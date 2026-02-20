import { Page, expect } from '@playwright/test';
import { InventoryLocators } from '../locators/InventoryLocators';
import { ENV } from '../utils/env';

export class InventoryPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(ENV.Inventory_URL);
        await this.page.waitForLoadState('load');
    }

    async verifyProductCount() {
        const count = await this.page.locator(InventoryLocators.inventoryItem).count();
        console.log("Product Count is : " + count);
    }

    async verifyAllProductDetails() {
        const products = this.page.locator('.inventory_item');
        const count = await products.count();

        const allProducts: any[] = [];

        for (let i = 0; i < count; i++) {
            const product = products.nth(i);

            const name = await product.locator('.inventory_item_name').textContent();
            const desc = await product.locator('.inventory_item_desc').textContent();
            const price = await product.locator('.inventory_item_price').textContent();

            allProducts.push({
                name: name?.trim(),
                description: desc?.trim(),
                price: price?.trim()
            });
        }

        console.log("All Product Details:", allProducts);
        return allProducts;
    }


    async verifyFooter() {
        const footerText = await this.page.locator(InventoryLocators.footer).textContent();
        console.log("Footer Text is : " + footerText);
    }

    async addToCartProduct() {
        await this.page.click(InventoryLocators.addToCartProd1);
        await expect(this.page.locator(InventoryLocators.removeProd1)).toHaveText("Remove");
        console.log("Product 1 added to cart & button value changed to remove");
        await this.page.click(InventoryLocators.addToCartProd2);
        await expect(this.page.locator(InventoryLocators.removeProd2)).toHaveText("Remove");
        console.log("Product 2 added to cart & button value changed to remove");
    }
}