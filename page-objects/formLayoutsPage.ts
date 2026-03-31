import { Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class FormLayoutsPage extends HelperBase{

    constructor(page:Page){
        super(page)
    }
    /**
     * This method submit the Using the Grid form with credentials and radiobutton selection
     * @param email - Valid  email of the user
     * @param password - Valid password of the user
     * @param optionText - Selection of option using text
     */
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email:string,password:string,optionText:string){
        const usingTheGridForm=this.page.locator('nb-card',{hasText:'Using the Grid'})
        await usingTheGridForm.getByRole('textbox',{name:'Email'}).fill(email)
        await usingTheGridForm.getByRole('textbox',{name:'Password'}).fill(password)
        await usingTheGridForm.getByRole('radio',{name:optionText}).check({force:true})
        await usingTheGridForm.getByRole('button').click()
    }
/**
 * This method submit the Inline form with name , email and checkbox selection
 * @param name - Valid first name and last name of the user
 * @param email - Valid email of the user 
 * @param rememberMe - true (select) or false (Unselect)
 */
    async submitInlineFormWithNameEMailAndCheckboxOption(name:string,email:string,rememberMe:boolean){
        const inlineForm=this.page.locator('nb-card',{hasText:'Inline form'})
        await inlineForm.getByRole('textbox',{name:'Jane Doe'}).fill(name)
        await inlineForm.getByRole('textbox',{name:'Email'}).fill(email)
        if(rememberMe)
            await inlineForm.getByRole('checkbox').check({force:true})
        await inlineForm.getByRole('button').click()
    }
}