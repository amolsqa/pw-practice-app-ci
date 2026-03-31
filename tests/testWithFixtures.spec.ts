import{test} from '../test-options-formLayoutsPage'
import { PageManager } from '../page-objects/pageManager'
import{faker} from '@faker-js/faker'


//test.beforeEach(async({page})=>{
  //  await page.goto('/')
//})

test('Parameterized Methods', async({page,formLayoutsPage})=>{
    const pm=new PageManager(page)
    const randomFullName=faker.person.fullName()
    const randomEmail=`${randomFullName.split(' ').join('')}${faker.number.int(1000)}@test.com`
    //await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com','Welcome1','Option 2')
    await pm.onFormLayoutsPage().submitInlineFormWithNameEMailAndCheckboxOption(randomFullName,randomEmail,false)
})
