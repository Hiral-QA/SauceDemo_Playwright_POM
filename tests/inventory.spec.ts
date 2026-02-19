import { test } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('Footer Text Validation', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigate();
    await inventoryPage.verifyProductCount();
    await inventoryPage.verifyFooter();
});