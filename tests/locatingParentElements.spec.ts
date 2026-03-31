import {test} from '@playwright/test'

test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})

test('Locating Parent Elements',async ({page})=>{
    //Using hasText as 2nd argument for locator
    await page.locator('nb-card',{hasText : "Using the Grid"}).getByRole("textbox",{name :"Email"}).click()

    //Using has: page.locator as 2nd argument for locator
    await page.locator('nb-card',{has: page.locator('#inputEmail1')}).getByRole("textbox",{name : "Email"}).click()

    //Using the filter() method
    await page.locator('nb-card').filter({hasText :"Basic form"}).getByRole("textbox",{name : "Email"}).click()

    //Using the filter() method & has : page.locator
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole("textbox",{name:"Password"}).click()

    //Using the filter() multiple times
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText:"Sign in"}).getByRole("textbox",{name: "Email"}).click()

    //Not Recommended - Using Xpath
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole("textbox",{name:"Email"}).click()
})