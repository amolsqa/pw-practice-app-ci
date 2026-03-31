import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('/')
})

//test.describe.only('Form Layouts page',async()=>{//Retries commented for parallel execution demo
    test.describe('Form Layouts page',async()=>{
    test.describe.configure({retries:0})
    test.beforeEach(async({page})=>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('Input Fields Usage',async({page},testInfo)=>{
if(testInfo.retry){
    console.log('Data cleaned')
}
    const usingTheGridEmailInput=page.locator('nb-card',{hasText:'Using the Grid'}).getByRole("textbox",{name:"Email"})
    // To enter the text in the input field
    await usingTheGridEmailInput.fill('test@test.com')
    // To clear the text in the input field
    await usingTheGridEmailInput.clear()
    // To enter the text in the input field simulating key strokes
    //await usingTheGridEmailInput.pressSequentially('test2@test.com',{delay:200}) //Retries commented for parallel execution demo
    await usingTheGridEmailInput.pressSequentially('test2@test.com')

    //Generic Assertion
    const inputValue= await usingTheGridEmailInput.inputValue()
    //expect(inputValue).toEqual('test2@test.com1') //Retries commented for parallel execution demo
    expect(inputValue).toEqual('test2@test.com')

    //Locator Assertion
    await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')
})  

test.only('Radio Button Usage',async({page})=>{
    const usingTheGridForm=page.locator('nb-card',{hasText:"Using the Grid"})
    //To click on Option 1 under Using the Grid using getByLabel
    //await usingTheRadioForm.getByLabel("Option 1").check({force:true})

    //To click on Option 1 under Using the Grid using getByRole
    await usingTheGridForm.getByRole("radio",{name:"Option 2"}).check({force:true})

    //Generic Assertion

    const radioStatus= await usingTheGridForm.getByRole("radio",{name:"Option 2"}).isChecked()
    //await expect(usingTheGridForm).toHaveScreenshot()

    //To avoid precise comparisons of screenshots. Give maximum difference
    // in pixels
    await expect(usingTheGridForm).toHaveScreenshot({maxDiffPixels:180})
    //expect(radioStatus).toBeTruthy()

    //Locator Assertion
    //await expect(usingTheRadioForm.getByRole("radio",{name:"Option 1"})).toBeChecked()

    //To check whether the Option 1 is unchecked when Option 2 is checked
    //await usingTheRadioForm.getByRole("radio",{name:"Option 2"}).check({force:true})
    //expect(await usingTheRadioForm.getByRole("radio",{name:"Option 1"}).isChecked()).toBeFalsy()
    //expect(await usingTheRadioForm.getByRole("radio",{name:"Option 2"}).isChecked()).toBeTruthy()
    
})


    
})

test('Checkboxes Usage',async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
    await page.getByRole("checkbox",{name:"Hide on click"}).uncheck({force:true})
    await page.getByRole("checkbox",{name:"Prevent arising of duplicate toast"}).check({force:true})

    const allBoxes=page.getByRole("checkbox")
    for(const box of await allBoxes.all()){
        //await box.check({force:true})
       // expect(await box.isChecked()).toBeTruthy()

        await box.uncheck({force:true})
        expect(await box.isChecked()).toBeFalsy()
    }
})