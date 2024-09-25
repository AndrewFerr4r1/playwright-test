const { test: base } = require('@playwright/test');

import { LoginPage } from '../pages/loginPage';

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page
        context['loginPage'] = new LoginPage(page),

        await use(context)
    }
})

export { test }