import { Locator, Page } from "playwright";
import { HomePage } from "./home-page";

export class CreditCardPage extends HomePage {

    private warningText: Locator

    constructor(page: Page) {
        super(page);
        this.warningText = this.page.locator('//span[@class="warning-banner-text_3Iuq"]')
    }
    getWarningText = async (): Promise<string | null> => {
        return await this.warningText.textContent()
    }
}