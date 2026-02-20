import { Page, expect } from '@playwright/test';
import { CartLocators } from '../locators/cartlocators';
import { ENV } from '../utils/env';

export class CartPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.goto(ENV.Cart_URL);
        //await this.page.click(CartLocators.cartLink);
    }

    async verifyCartItemCount() {
        const cartItems = this.page.locator(CartLocators.cartItems);
        const count = await cartItems.count();
        //console.log("Cart Items Count is : " + count);
    }

    async verifyCartLabel() {
        const cartLabel = this.page.locator(CartLocators.cartLabel);
        const text = await cartLabel.textContent();
        console.log("Cart Label is : " + text);
    }

    async verifyQuantityLabel() {
        const quantityLabel = this.page.locator(CartLocators.quantityLabel);
        const text = await quantityLabel.textContent();
        console.log("Quantity Label is : " + text);
    }

    async verifyDescriptionLabel() {
        const descriptionLabel = this.page.locator(CartLocators.descriptionLabel);
        const text = await descriptionLabel.textContent();
        console.log("Description Label is : " + text);
    }

    async verifyContinueShoppingButton() {
        const continueShoppingButton = this.page.locator(CartLocators.continueShoppingButton);
        const text = await continueShoppingButton.textContent();
        console.log("Continue Shopping Button is : " + text);
    }

    async verifyCheckoutButton() {
        const checkoutButton = this.page.locator(CartLocators.checkoutButton);
        const text = await checkoutButton.textContent();
        console.log("Checkout Button is : " + text);
    }

    async verifyCartItems() {
        const items = this.page.locator('.cart_item');
        const count = await items.count();

        for (let i = 0; i < count; i++) {
            const name = await items.nth(i).locator('.inventory_item_name').textContent();
            const price = await items.nth(i).locator('.inventory_item_price').textContent();
            const qty = await items.nth(i).locator('.cart_quantity').textContent();

            //console.log(`Item ${i + 1}:`, name, price, qty);
        }
    }
}
