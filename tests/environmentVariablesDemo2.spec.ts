import{expect} from '@playwright/test'
import{test} from '../test-options'


test('Drag and Drop in IFrames',async({page,globalsQaURL})=>{
    //3. We cannot use our own environment variables to run different
    //URLs in playwright.config.ts file directly. We need to make
    // following configurations/settings
    //A. Create the test-options.ts file & update the code in it
    //B. Import the TestOptions in the playwright.config.ts file &
    //update the export default defineConfig<TestOptions>({. Also, add
    //globalsQaURL with the URL under the use section.
    //C. In this test file, first import test from test-options file
    //In the async method, add the globalsQaURL
   await page.goto(globalsQaURL)
   const frame=page.frameLocator('[rel-title="Photo Manager"] iframe')
   await frame.locator('li',{hasText:"High Tatras 2"}).dragTo(frame.locator('#trash'))
   //More precise control
   await frame.locator('li',{hasText:"High Tatras 4"}).hover()
   await page.mouse.down()
   await frame.locator('#trash').hover()
   await page.mouse.up()
   await expect(frame.locator('#trash li h5')).toHaveText(['High Tatras 2','High Tatras 4'])
})
