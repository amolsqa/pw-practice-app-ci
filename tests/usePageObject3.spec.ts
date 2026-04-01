import{test,expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import{faker} from '@faker-js/faker'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test('Navigate To Form Page',async({page})=>{
    const pm=new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('Parameterized Methods', async({page})=>{
    const pm=new PageManager(page)
   
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com','Welcome1','Option 2')
    await pm.onFormLayoutsPage().submitInlineFormWithNameEMailAndCheckboxOption('Scott Tiger','scott@test.com',false)
})

test('Datepicker Page Objects',async({page})=>{
    const pm=new PageManager(page)
    await pm.navigateTo().datepickerPage()
    await pm.ondatepickerPage().selectCommonDatePickerDateFromToday(50)
    await pm.ondatepickerPage().selectDatepickerWithRangeFromToday(50,55)
})
// Demonstration purpose - Github Actions and Argos CI
test.only('Github Actions & Testing With Argos CI',async({page})=>{
    const pm=new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
})