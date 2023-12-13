import { Locator, Page } from "playwright/test";
import { BasePage } from "./base-page";
import * as uc from "../../infra/resources/user-login.json"
const BASE_URL = uc.BASE_URL;


export class HomePage extends BasePage {
    private categorySelectionFromNav = (category: string) => this.page.locator(`//nav/ul/li/a[text() = '${category}']`)
    private subchose = (KidGender: string, clothingOption: string) => this.page.locator(`//ul/li/a[text() = '${KidGender}']/parent::li/ul/li/a[text() ='${clothingOption}']`)
    private subCat = (SubCategory: string, item: string) => this.page.locator(`//a[@href="${SubCategory}"]/parent::li/ul/li/a[text() = "${item}"]`)
    private wishListButton: Locator
    private cartOptions: Locator
    private cartButton: Locator
    private profileName: Locator
    private searchButton: Locator
    private searchInput: Locator
    private itemNameResults: Locator
    private profile: Locator
    private creditCardPageLink: Locator

    constructor(page: Page) {
        super(page)
        this.wishListButton = this.page.locator("//a[@data-test-id='qa-link-wishlist']")
        this.cartOptions = this.page.locator("//a[@data-test-id='qa-link-minicart']")
        this.cartButton = this.page.locator("//a[@data-test-id='qa-minicart-cart-button']")
        this.profileName = this.page.locator('//span[@class="profile-button-new-menu-underline_1fv_"]')
        this.searchButton = this.page.locator('//button[@data-test-id="qa-header-search-button"]')
        this.searchInput = this.page.locator('//input[@data-test-id="qa-search-box-input"]')
        this.itemNameResults = this.page.locator("//a[@class='tx-link-a title_3ZxJ roboto-font_h7Lu tx-link_29YD underline-hover_3GkV']")
        this.profile = this.page.locator('//span[@class="greet_Yfio profile-button-new-menu_2voE"]')
        this.creditCardPageLink = this.page.locator("//a[text() = 'אמצעי התשלום שלי']")
    }

    goto = async (): Promise<void> => {
        await this.page.goto(BASE_URL)
    }
    clickOnCategoryFromNav = async (category: string) => {
        await this.categorySelectionFromNav(category).click()
    }

    hoverOverCategory = async (category: string) => {
        await this.categorySelectionFromNav(category).hover()
    }

    selectFromSubCategory = async (KidGender: string, clothingOption: string) => {
        await this.subchose(KidGender, clothingOption).click()
    }

    subCategorySelector = async (SubCategory: string, item: string) => {
        await this.subCat(SubCategory, item).click()
    }
    navigateToWishListPage = async () => {
        await this.wishListButton.click();
    }
    clickOnCartIcon = async () => {
        await this.initPage()
        await this.waitLocator("//a[@data-test-id='qa-link-minicart']")
        await this.cartOptions.click()
    }
    navigateToCartPage = async () => {
        await this.initPage()
        await this.waitLocator("//a[@data-test-id='qa-link-minicart']")
        await this.cartOptions.click()
        await this.waitLocator("//a[@data-test-id='qa-minicart-cart-button']")
        await this.cartButton.click()
    }

    getProfileName = async (): Promise<string | null> => {
        return await this.profileName.textContent()
    }
    search = async (item: string): Promise<void> => {
        await this.searchButton.click()
        await this.searchInput.fill(item)
        await this.page.keyboard.press('Enter')
    }
    getResultItems = async (): Promise<string | null> => {
        return await this.itemNameResults.nth(1).textContent();
    }
    NavigateToCreditCardPage = async () => {
        await this.profile.click()
        await this.creditCardPageLink.click()
    }
}