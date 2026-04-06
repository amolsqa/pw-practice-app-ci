import { defineConfig, devices } from '@playwright/test';
import { TestOptions } from './test-options.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { createArgosReporterOptions } from "@argos-ci/playwright/reporter";
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: '.env' })

export default defineConfig<TestOptions>({
   timeout:40000,
   //globalTimeout:60000,
   expect:{
          timeout:2000
   },

  retries: 1,
  //reporter: 'html',
  //reporter:'list',
  reporter:[
    process.env.CI ? ["dot"] : ["list"],
    [
      "@argos-ci/playwright/reporter",
      createArgosReporterOptions({
        // Upload to Argos on CI only.
        uploadToArgos: !!process.env.CI,

        // Set your Argos token (required if not using GitHub Actions).
        //token: "<YOUR-ARGOS-TOKEN>",
      }),
    ],//['json',{outputFile:'test-results/jsonReport.json'}],
            //['junit',{outputFile:'test-results/junitReport.xml'}],
            //['allure-playwright'],
            ['html']
            ],
 
  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL:process.env.DEV==='1'?'http://localhost:4200/'
          :process.env.STAGING==='1'?'http://localhost:4202/'
          :'http://localhost:4200/',
    
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    actionTimeout:20000,
    navigationTimeout:25000,
    video:{
      mode: 'off',
      size:{width: 1920,height: 1080}
    }
  },

  projects: [
    {
      name: 'dev',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL:'http://localhost:4200' 
      },
    },
    {
      name: 'chromium',
      timeout:60000
    },
    {
      name: 'firefox',
      use: {
        browserName:'firefox',
        video:{
      mode: 'on',
      size:{width: 1920,height: 1080}
    }
       }
    },
    {
      name:'pageObject3FullScreen',
      testMatch: 'usePageObject3.spec.ts',
      use:{
        viewport:{width: 1920,height: 1080}
      }
    },
    {
      name:'mobile',
      //testMatch:'testMobileDemo.spec.ts',
      testMatch:'testMobileMultiplePlatformsDemo.spec.ts',
      use:{
        ...devices['iPhone 14 Pro']
      }
    }
  ],
  webServer:{
    command:'npm run start',
    url:'http://localhost:4200' // No need to run server independently
  }
});
