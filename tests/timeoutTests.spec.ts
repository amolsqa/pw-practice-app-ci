import {expect, test} from '@playwright/test'
//7th Example - To update the timeout for every test by 2 secs from 10 secs (Mention in the playwright.config.ts file)
test.beforeEach(async ({page},testInfo)=>{
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    //testInfo.setTimeout(testInfo.timeout+2000)
})

test('Timeouts Example', async({page})=>{
    //5th Example - We can override the test timeout from 40 secs(mentioned in the playwright.config.ts file) to 10 secs
    //test.setTimeout(10000)

//6th Example - We can increase the test timeout 10 secs 3 times (mentioned in the playwright.config.ts file) to 30 secs
//test.slow()
    //1st Example - Default to test timeout of 30 secs
    //2nd Example - If we set timeout as 10 secs in playwright.config.ts file. The click fails
    //3rd Example - IF we set action timeout to 5 secs in playwright.config.ts file. The click fails
    
    const successButton=page.locator('.bg-success')
    //await successButton.click()

    //4th Example - Setting timeout in the click action overriding 5 secs timeout in the playwright.config.ts file to 20 secs
    await successButton.click({timeout:20000}) //Removed the comment for the parallel execution demp

    //6th Example & 7th Example
    //await successButton.click()

    //8th Example - Expect timeout override - default is 5 secs
    expect(successButton).toHaveText('Data loaded with AJAX get request.')



})