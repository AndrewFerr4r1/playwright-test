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

    async filterProduct(listProduct) {
        await this.page.locator("//select[@class='product_sort_container']").selectOption('za');
        for(var i = 0; i < listProduct.length; i++) {
            var element = await this.page.locator(`(//div[@class='inventory_item_name '])[${i+1}]`).innerText();
            console.log(element);
            await expect(element).toBe(`${listProduct[i]}`);
        }
    }

    async filterPriceLow(listProduct) {
        await this.page.locator("//select[@class='product_sort_container']").selectOption('lohi');
        for(var i = 0; i < listProduct.length; i++) {
            if(i != listProduct.length - 1) {
                var value = await this.page.locator(`(//div[@class='inventory_item_price'])[${i+1}]`).innerText();
                var value2 = await this.page.locator(`(//div[@class='inventory_item_price'])[${i+2}]`).innerText();
                
                if(value != value2) {
                    value = await parseFloat(value.replace('$', '').replace(',', ''));
                    value2 = await parseFloat(value2.replace('$', '').replace(',', ''));
                    await expect(value).toBeLessThan(value2);
                }
                
            }
        }
    }

}