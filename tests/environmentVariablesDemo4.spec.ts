import {test} from "@playwright/test";

test('first test',async ({page})=>{
   //1. The base URL is stored in baseURL variable in playwright.config.ts file
   //2. To execute the test file under different projects
   //having different environment URLs in the terminal commnad
   await page.goto('/')
   await page.getByText('Forms').click()
   await page.getByText('Form Layouts').click()
})