import{test,expect} from '@playwright/test'

test('Input Fields Usage',async({page})=>{
    await page.goto('/')
    await page.locator('.sidebar-toggle').click()
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    await page.locator('.sidebar-toggle').click()
    const usingTheGridEmailInput=page.locator('nb-card',{hasText:'Using the Grid'}).getByRole("textbox",{name:"Email"})
    // To enter the text in the input field
    await usingTheGridEmailInput.fill('test@test.com')
    // To clear the text in the input field
    await usingTheGridEmailInput.clear()
    // To enter the text in the input field simulating key strokes
    await usingTheGridEmailInput.pressSequentially('test2@test.com')

    //Generic Assertion
    //const inputValue= await usingTheGridEmailInput.inputValue()
    //expect(inputValue).toEqual('test2@test.com')

    //Locator Assertion
    //await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')
})