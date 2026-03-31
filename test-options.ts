//This file is created to demostrate the point 3 in the environment
// VariablesDemo2.spec.ts file
import {test as base} from '@playwright/test'

export type TestOptions={
    globalsQaURL: string
}

export const test=base.extend<TestOptions>({
    globalsQaURL:['',{option:true}]
})