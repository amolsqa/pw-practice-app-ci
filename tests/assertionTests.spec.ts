import {expect, test} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Assertion', async({page})=>{
    //General assertion

    const value=5
    expect(value).toEqual(5)


    const basicFormButton=page.locator('nb-card').filter({hasText:"Basic form"}).locator('button')
    const text= await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    //Locator assertion
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertion
    //await expect.soft(basicFormButton).toHaveText('Submit5') //Commented for parallel execution demo
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()
})