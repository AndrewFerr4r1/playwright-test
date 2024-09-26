import { test } from "../support";

const user = "standard_user"
const password = "secret_sauce"

test('login success', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, password);
});

test('login empty username', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.validEmpty("empty", password);
});

test('login empty password', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.validEmpty(user, "empty");
});

test('login invalid', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.invalidLogin("invalid", "login");
});

test('login and logout', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, password);
  await page.homePage.logout();
});
