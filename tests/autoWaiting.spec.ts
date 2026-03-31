import {expect, test} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test.skip('Auto Waiting', async({page})=>{
    //1st Example
    const successButton=page.locator('.bg-success')
    //await successButton.click() //By default, the playwright wait for 30 secs

    //2nd Example
    //const text= await successButton.textContent() //It will wait for successButton to be available to get content
    //expect(text).toEqual('Data loaded with AJAX get request.')

    //3rd Example
    //await successButton.waitFor({state:"attached"})
    //const text1= await successButton.allTextContents()//It will not wait for successButton to be available to get content
    //expect(text1).toContain('Data loaded with AJAX get request.')

    //4th Example
    //await expect(successButton).toHaveText('Data loaded with AJAX get request.')// It wait for 5 secs but successButton (Take 15 secs) is not available for assertion - Failed
    await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})
})

// Alternatives to handle command such as allTextContents()
test.skip('Alternative Waits',async({page})=>{
    const successButton=page.locator('.bg-success')
    //1. Wait for selector
    //await page.waitForSelector('.bg-success')
    //const text= await successButton.allTextContents()
    //expect(text).toContain('Data loaded with AJAX get request.')

    //2. Wait for response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
    //const text= await successButton.allTextContents()
    //expect(text).toContain('Data loaded with AJAX get request.')

    //3. Wait for network calls completion - Not Recommended
    await page.waitForLoadState('networkidle')
    const text= await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})