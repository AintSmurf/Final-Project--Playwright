import { test, expect } from "./fixtures/base-fixture"


test.describe('Testing Terminal-X', async () => {


    test.describe('smoke tests api', async () => {
        test.beforeEach('setUp the HomePage', async ({ homePage }) => {
            await homePage.goto()
        })
        test.afterEach('clear the framework', async ({ httpHelper }) => {
            await httpHelper.clearWishList()
            await httpHelper.clearCart()
        })

        test('add and remove - api WishList', async ({ httpHelper }) => {
            const itemID = await httpHelper.addItemToWishList('W150580001', '4')
            await httpHelper.removeItemFromWishList(itemID)
            expect(await httpHelper.getWishListCount()).toBe(0)
        })
        test('add and remove - api Cart', async ({ httpHelper }) => {
            const itemID = await httpHelper.addItemToCart('W13547201504')
            const ls = await httpHelper.getItemDetails()
            await httpHelper.removeItemFromCart(parseInt(ls[0].id))
            expect(await httpHelper.getCartCount()).toBe(0)
        })
        test('get Items', async ({ httpHelper }) => {
            expect(await httpHelper.getAllItemsSKU("189")).not.toBeNull()
        })
    })

})





