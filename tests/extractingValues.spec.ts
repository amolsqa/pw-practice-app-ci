import {expect, test} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Extracting Values', async({page})=>{
    //Get single text value - For Submit button text from basic form
    const basicForm=page.locator('nb-card').filter({hasText:"Basic form"})
    const buttonText= await basicForm.getByRole("button").textContent()
    expect(buttonText).toEqual("Submit")

    //Get multiple text values - For radiobuttons text in the Using the Grid section
    const allRadioButtonLabels= await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonLabels).toContain('Option 1')

    //Get input value - From email field of the basic form
    const emailField=basicForm.getByRole("textbox",{name:"Email"})
    await emailField.fill('test@test.com')
    const emailValue= await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')

    //Get attribute value - From email field of the basic form
    const placeHolderValue= await emailField.getAttribute('placeholder')
    expect(placeHolderValue).toEqual('Email')
})