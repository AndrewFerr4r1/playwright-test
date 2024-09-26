import { expect } from "@playwright/test";

export class LoginPage{
    
    constructor(page) {
        this.page = page;
    }

    async openLogin() {
        await this.page.goto("");
        await expect(await this.page.locator("//div[@class='login_logo']")).toHaveText("Swag Labs");
    }

    async doLogin(user, password) {
        await this.page.getByPlaceholder("Username").fill(user);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.getByText("Login").click();
        await expect(this.page.locator("//span[@class='title']")).toHaveText("Products"); 
    }

    async validEmpty(user, password) {
        if(password == "empty") {
            await this.page.getByPlaceholder("Username").fill(user);
            await this.page.getByText("Login").click();
            await expect(this.page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Password is required");
        }else {
            await this.page.getByText("Login").click();
            await expect(this.page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username is required");
        } 
    }

    async invalidLogin(user, password) {
        await this.page.getByPlaceholder("Username").fill(user);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.getByText("Login").click();
        await expect(this.page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }

}