import { test, expect } from "./fixtures/base-fixture"


test.describe("full flow tests - e2e ", () => {

    test.beforeEach('setUp the HomePage', async ({ homePage }) => {
        await homePage.goto()
    })
    test.afterEach('clear the framework', async ({ httpHelper }) => {
        await httpHelper.clearWishList()
        await httpHelper.clearCart()

    })
    test('validate user logged in', async ({ httpHelper, homePage }) => {
        const profileName = await homePage.getProfileName()

        expect(await httpHelper.getUserProfileName()).toContain(profileName)
    })
    test("add item throgh api validate via ui - wishlist ", async ({ httpHelper, homePage, wishlistPage }) => {
        await httpHelper.addItemToWishList("W142310027", "2148")
        await homePage.navigateToWishListPage()
        let text = await wishlistPage.getitemNameFromWishListByIndex(0)
        expect(await httpHelper.verifyItemExistsInWishList(text))
    })

    test("add item throgh api validate via ui -Cart", async ({ homePage, cartPage, httpHelper }) => {
        await httpHelper.addItemToCart("Z81883003001")
        await homePage.reload()
        await homePage.navigateToCartPage()
        let name = await cartPage.getItemNameFromCartByIndex(0)
        expect(await httpHelper.verifyItemExistsInCart(name)).toBeTruthy()
    })
})