import{test} from '../test-options-formLayoutsPage'
import{faker} from '@faker-js/faker'


//test.beforeEach(async({page})=>{
  //  await page.goto('/')
//})

test('Parameterized Methods', async({pageManager})=>{
    const randomFullName=faker.person.fullName()
    const randomEmail=`${randomFullName.split(' ').join('')}${faker.number.int(1000)}@test.com`
    //await pm.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com','Welcome1','Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEMailAndCheckboxOption(randomFullName,randomEmail,false)
})
