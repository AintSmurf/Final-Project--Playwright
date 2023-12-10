import { test as base } from "@playwright/test"
import { HttpHelper } from "../../logic/requests/http-helper"
import { HomePage } from "../../logic/pages/home-page"
import { CartPage } from "../../logic/pages/cart-page"
import { WishListPage } from "../../logic/pages/wishlist-page"
import { ProductPage } from "../../logic/pages/products-page"

export const test = base.extend<{ httpHelper: HttpHelper, homePage: HomePage, cartPage: CartPage, wishlistPage: WishListPage, productPage: ProductPage }>
    ({
        httpHelper: async ({ page }, use) => {
            await use(new HttpHelper(page))
        },
        homePage: async ({ page }, use) => {
            await use(new HomePage(page))
        },
        cartPage: async ({ page }, use) => {
            await use(new CartPage(page))
        },
        wishlistPage: async ({ page }, use) => {
            await use(new WishListPage(page))
        },
        productPage: async ({ page }, use) => {
            await use(new ProductPage(page))
        }
    })
export { expect } from '@playwright/test';


