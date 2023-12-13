import { test as base } from "@playwright/test"
import { HttpHelper } from "../../logic/requests/http-helper"
import { HomePage } from "../../logic/pages/home-page"
import { CartPage } from "../../logic/pages/cart-page"
import { WishListPage } from "../../logic/pages/wishlist-page"
import { ProductPage } from "../../logic/pages/products-page"
import { PageContext } from "../../logic/pages/page-context"
import { CreditCardPage } from "../../logic/pages/credit-card"

export const test = base.extend<{ httpHelper: HttpHelper, homePage: HomePage, cartPage: CartPage, wishlistPage: WishListPage, productPage: ProductPage, pageContext: PageContext, creditPage: CreditCardPage }>
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
        },
        creditPage: async ({ page }, use) => {
            await use(new CreditCardPage(page))
        },
        pageContext: async ({ page }, use) => {
            await use(new PageContext(page))
        },

    })
export { expect } from '@playwright/test';


