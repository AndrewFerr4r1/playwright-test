import { expect } from "@playwright/test";
import { test } from "../support";

const user = "standard_user"
const password = "secret_sauce"

test('login success', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, password);
});

test('login wrong password', async ({ page }) => {
  await page.loginPage.openLogin();
  await page.loginPage.doLogin(user, "");
});
