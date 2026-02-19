import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    projects: [
        // 🔐 Setup project (NO storageState here)
        {
            name: 'setup',
            testMatch: /.*\.setup\.ts/,
            use: {
                headless: false,
                launchOptions: { slowMo: 1000 },
            },
        },

        // 🧪 Actual tests (USE storageState)
        {
            name: 'tests',
            dependencies: ['setup'],
            use: {
                headless: false,
                storageState: 'storage/auth.json',   // 👈 ONLY here
                launchOptions: { slowMo: 1000 },
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
            },
        },
    ],

    reporter: [['html', { open: 'never' }]],
});
