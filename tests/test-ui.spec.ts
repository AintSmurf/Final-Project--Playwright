import { test, expect } from "./fixtures/base-fixture"
import { Category } from "../logic/pages/Enums/CategoryEnum"
import { WomenSubCategory, PANTS } from "../logic/pages/Enums/WomenEnum/subCategoryForWomen"
import { Colors } from "../logic/pages/Enums/filterByEnum/ColorsEnum/Colors"
import { FilterBy } from "../logic/pages/Enums/filterByEnum/ColorsEnum/filterBy"


test.describe("Ui Tests", async () => {

    test.beforeEach('setUp the HomePage', async ({ homePage }) => {
        await homePage.goto()
    })
    test("addd", async ({ homePage, productPage }) => {
        await homePage.hoverOverCategory(Category.WOMEN)
        await homePage.subCategorySelector(WomenSubCategory.WOMEN_PANTS, PANTS.JEANS)
        await productPage.filterBy(FilterBy.COLOR)
        await productPage.selectColor(Colors.BLACK)
        await productPage.pause()
    })
})