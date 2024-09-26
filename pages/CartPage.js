import { expect } from "@playwright/test";

export class CartPage{
    
    constructor(page) {
        this.page = page;
    }

    async addItensCart(listCart) {    
        for(var i = 0; i < listCart.length; i++) {
            await this.page.getByText(`${listCart[i]}`).click();
            await this.page.locator("//button[@class='btn btn_primary btn_small btn_inventory']").click();
            await this.page.getByText("Back to products").click();
        }
    }

    async validCart(listCart) {
        await this.page.locator("//a[@class='shopping_cart_link']").click();
        for(var i = 0; i < listCart.length; i++) {
            var element = await this.page.locator(`(//div[@class='inventory_item_name'])[${i+1}]`).innerText();
            console.log(element);
            await expect(element).toBe(`${listCart[i]}`);
        }
    }

    async removeCompleteCart(listCart) {
        await this.page.locator("//a[@class='shopping_cart_link']").click();
        for(var i = listCart.length; i > 0; i--) {
            await this.page.locator(`(//button[@class='btn btn_secondary btn_small cart_button'])[${i}]`).click();
        }
        await expect(this.page.locator(`//button[@class='btn btn_secondary btn_small cart_button']`)).toBeHidden();
    }

    async completeBuy(firstName, lastName, postal, listCart) {
        await this.page.getByText("Checkout").click();
        await this.page.getByPlaceholder("First Name").fill(firstName);
        await this.page.getByPlaceholder("Last Name").fill(lastName);
        await this.page.getByPlaceholder("Zip/Postal Code").fill(postal);
        await this.page.locator("//input[@id='continue']").click();

        for(var i = 0; i < listCart.length; i++) {
            var element = await this.page.locator(`(//div[@class='inventory_item_name'])[${i+1}]`).innerText();
            console.log(element);
            await expect(element).toBe(`${listCart[i]}`);
        }
        await this.page.getByText("Finish").click();
        await expect(this.page.locator("//h2[@class='complete-header']")).toHaveText("Thank you for your order!");
    }

}