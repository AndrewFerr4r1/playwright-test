import { test } from "../support";

const listCart = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

const user = "standard_user"
const password = "secret_sauce"

test('add cart', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, password);
  await page.cartPage.addItensCart(listCart);
  await page.cartPage.validCart(listCart);
});

test('remove cart', async ({ page }) => {
    await page.loginPage.openLogin();
    await page.loginPage.doLogin(user, password);
    await page.cartPage.addItensCart(listCart);
    await page.cartPage.removeCompleteCart(listCart);
});

test('make purchase', async ({ page }) => {
    await page.loginPage.openLogin();
    await page.loginPage.doLogin(user, password);
    await page.cartPage.addItensCart(listCart);
    await page.cartPage.validCart(listCart);
    await page.cartPage.completeBuy("test", "test", "12345678", listCart);
});