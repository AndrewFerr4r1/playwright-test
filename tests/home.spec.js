import { test } from "../support";

const listProduct = ["Test.allTheThings() T-Shirt (Red)", "Sauce Labs Onesie", "Sauce Labs Fleece Jacket", "Sauce Labs Bolt T-Shirt", "Sauce Labs Bike Light", 
    "Sauce Labs Backpack"];

const user = "standard_user"
const password = "secret_sauce"

test('filter of z the a', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, password);
  await page.homePage.filterProduct(listProduct);
});

test('filter price low', async ({ page }) => {
    await page.loginPage.openLogin();
    await page.loginPage.doLogin(user, password);
    await page.homePage.filterPriceLow(listProduct);
  });