const { test: base } = require('@playwright/test');

import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/homePage';

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page
        context['loginPage'] = new LoginPage(page),
        context['cartPage'] = new CartPage(page),
        context['homePage'] = new HomePage(page),

        await use(context)
    }
})

export { test }