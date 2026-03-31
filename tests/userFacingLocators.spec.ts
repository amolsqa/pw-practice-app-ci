import {test} from '@playwright/test'

test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})

test('User Facing Locators',async ({page})=>{
    //getByRole
   await page.getByRole("textbox",{name:"Email"}).first().click()
   await page.getByRole("button",{name:"Sign in"}).first().click()

   //getByLabel
   await page.getByLabel('Email').first().click()

   //getByPlaceholder
   await page.getByPlaceholder('Jane Doe').click()

   //getByText
   await page.getByText('Using the Grid').click()

   //getByTestId
   await page.getByTestId('SignIn').click()
   
   //getByTitle
   await page.getByTitle('IoT Dashboard').click()
})