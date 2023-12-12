import { Page } from "playwright";
import { BasePage } from "./base-page";
import { HomePage } from "./home-page";
import { CartPage } from "./cart-page";
import { HttpHelper } from "../requests/http-helper";
import { WishListPage } from "./wishlist-page";
import { ProductPage } from "./products-page";


export class PageContext extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    getHomePage = async (): Promise<HomePage> => {
        return new HomePage(this.page)
    }
    getCartPage = async (): Promise<CartPage> => {
        return new CartPage(this.page)
    }
    getHttpHelper = async (): Promise<HttpHelper> => {
        return new HttpHelper(this.page)
    }
    getWishListPage = async (): Promise<WishListPage> => {
        return new WishListPage(this.page)
    }
    getProductPage = async (): Promise<ProductPage> => {
        return new ProductPage(this.page)
    }
    getPage = async <T>(page: new () => T): Promise<T> => {
        return new page();
    };
}