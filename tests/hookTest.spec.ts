import {test} from '@playwright/test'

//This hook beforeEach is executed before each test
test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
})

test('Navigate to Form Layouts',async ({page})=>{ 
   await page.getByText('Form Layouts').click()
})

test('Navigate to Datepicker',async ({page})=>{
   await page.getByText('Datepicker').click()
})