import {test} from '@playwright/test'
// This hook beforeAll is executed before each test suite
test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:4200/')
})
//This hook beforeEach is executed before each test
test.describe('Test Suite 1',()=>{
test.beforeEach(async ({page})=>{
   await page.getByText('Forms').click()
})

test('Navigate to Form Layouts',async ({page})=>{ 
   await page.getByText('Form Layouts').click()
})

test('Navigate to Datepicker',async ({page})=>{
   await page.getByText('Datepicker').click()
})
})

test.describe('Test Suite 2',()=>{
test.beforeEach(async ({page})=>{
   await page.getByText('Modal & Overlays').click()
})

test('Navigate to Dialog',async ({page})=>{ 
   await page.getByText('Dialog').click()
})

test('Navigate to Window',async ({page})=>{
   await page.getByText('Window').click()
})
})