import{test,expect} from '@playwright/test'
import{NavigationPage} from '../page-objects/navigationPage2'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test('Navigate To Form Page',async({page})=>{
    const navigateTo=new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datepickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('Parameterized Methods', async({page})=>{
    const navigateTo=new NavigationPage(page)
    const onFormLayoutsPage=new FormLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com','Welcome1','Option 2')
    //1. To take the screenshot of the whole page/browser
    await page.screenshot({path:'screenshots/formLayoutsPage.png'})
    await onFormLayoutsPage.submitInlineFormWithNameEMailAndCheckboxOption('Scott Tiger','scott@test.com',false)
    //2. To take the screenshot of the particular section of the page/browser
    await page.locator('nb-card',{hasText:"Inline form"}).screenshot({path:'screenshots/inlineForm.png'})
    //3. To take the screenshot in the binary format to share accross the different systems
    const buffer=await page.screenshot()
    console.log(buffer.toString('base64'))
})

test('Datepicker Page Objects',async({page})=>{
    const navigateTo=new NavigationPage(page)
    const ondatepickerPage=new DatepickerPage(page)

    await navigateTo.datepickerPage()
    await ondatepickerPage.selectCommonDatePickerDateFromToday(50)
    await ondatepickerPage.selectDatepickerWithRangeFromToday(50,55)
    await page.waitForTimeout(500)
})