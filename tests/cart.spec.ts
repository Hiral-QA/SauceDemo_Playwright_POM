import { test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Cart Validation', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.navigate();
    await cartPage.verifyCartItemCount();
    await cartPage.verifyCartItems();
    await cartPage.verifyCheckoutButton();
    await cartPage.verifyCartLabel();
    await cartPage.verifyQuantityLabel();
    await cartPage.verifyDescriptionLabel();
    await cartPage.verifyContinueShoppingButton();
});