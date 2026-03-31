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
    await onFormLayoutsPage.submitInlineFormWithNameEMailAndCheckboxOption('Scott Tiger','scott@test.com',false)
})

test('Datepicker Page Objects',async({page})=>{
    const navigateTo=new NavigationPage(page)
    const ondatepickerPage=new DatepickerPage(page)

    await navigateTo.datepickerPage()
    await ondatepickerPage.selectCommonDatePickerDateFromToday(50)
    await ondatepickerPage.selectDatepickerWithRangeFromToday(50,55)
})