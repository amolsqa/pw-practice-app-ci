import {test} from '@playwright/test'

test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})

test('Locating Child Elements',async ({page})=>{
    //Mutiple locators separated by the space within single locator
 await page.locator('nb-card nb-radio :text-is("Option 1")').click()

 //Multiple locators separated by different locator
 await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

 //Combining regular locators and user facing locators
 await page.locator('nb-card').getByRole('button').first().click()

 //Not preferred locators
 await page.locator('nb-card').nth(2).getByRole('button').click()

})