import { expect } from "@playwright/test";

export class HomePage{
    
    constructor(page) {
        this.page = page;
    }

    async logout() {
        await this.page.locator("//button[@id='react-burger-menu-btn']").click();
        await this.page.getByText("Logout").click();
        await expect(this.page.locator("(//h4)[1]")).toHaveText("Accepted usernames are:");
    }

}