import { defineConfig, devices } from '@playwright/test';
import { TestOptions } from './test-options';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig<TestOptions>({
 
  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL:'http://localhost:4200/',
  },

  projects: [
    {
      name: 'chromium'
    }
  ]
});
