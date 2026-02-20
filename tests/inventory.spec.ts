import { test } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('Inventory Validation', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigate();
    await inventoryPage.verifyProductCount();
    await inventoryPage.verifyAllProductDetails();
    await inventoryPage.verifyFooter();
    await inventoryPage.addToCartProduct();
});