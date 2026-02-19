import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const ENV = {
    BASE_URL: process.env.BASE_URL || '',
    SAUCE_USERNAME: process.env.SAUCE_USERNAME || '',
    SAUCE_PASSWORD: process.env.SAUCE_PASSWORD || '',
    Inventory_URL: process.env.Inverntory_URL || '',
};
