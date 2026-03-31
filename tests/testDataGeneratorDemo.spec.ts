import{test,expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import{faker} from '@faker-js/faker'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test('Parameterized Methods', async({page})=>{
    const pm=new PageManager(page)
    const randomFullName=faker.person.fullName()
    const randomEmail=`${randomFullName.split(' ').join('')}${faker.number.int(1000)}@test.com`
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitInlineFormWithNameEMailAndCheckboxOption(randomFullName,randomEmail,false)
})
