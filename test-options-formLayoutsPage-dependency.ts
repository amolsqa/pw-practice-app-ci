//This file is created to demonstrate the test fixtures for 
// formLayoutsPage
// page.goto('/') & await pm.navigateTo().formLayoutsPage()
//  in testWithFixtures.spec.ts file
import {test as base} from '@playwright/test'
import { PageManager } from './page-objects/pageManager'

export type TestOptions={
    globalsQaURL: string
    formLayoutsPage: string
    pageManager: PageManager
}

export const test=base.extend<TestOptions>({
    globalsQaURL:['',{option:true}],
    //Point 4 - demonstrate the dependency of pageManager fixture
//on formLayoutsPage fixture formLayoutsPage for testWithFixtures.spec.ts file
    formLayoutsPage:async({page},use)=>{
    await page.goto('/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    await use('')
    console.log('Teardown')
     }, 
     //Point 3 - demonstrate the test fixtures of PageManager for 
// formLayoutsPage for testWithFixtures3.spec.ts file
pageManager:async({page,formLayoutsPage},use)=>{
    const pm=new PageManager(page)
    await use(pm)
}

})