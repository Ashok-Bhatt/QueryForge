import puppeteerCore from "puppeteer-core";
import {BROWSERLESS_TOKEN } from "../config.js";

const scrapeURL = async ({url}) => {

    let browser;
    try {
        const browser = await puppeteerCore.connect({
            browserWSEndpoint: `wss://production-sfo.browserless.io?token=${BROWSERLESS_TOKEN}`,
        });

        if (!browser) return "";

        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.waitForSelector('body', { timeout: 5000 });

        const data = await page.content();
        await page.close();
        console.log(data);
        return data;
    } catch {(error)=>{
        console.log(error.message);
        return "";
    }} finally {
        if (browser) await browser.close();
    }
}

const scrapeURLDeclaration = {
    name: "scrapeURL",
    description: "This is a function that will scrape the data from the provided url",
    parameters: {
        type: "OBJECT",
        properties: {
            url: {
                type : "INTEGER",
                description: "It will be an URL that is going to be scrapped e.g.: https://leetcode.com/u/ashokbhatt2048/"
            }
        },
        required: ["url"]
    }
}

export {
    scrapeURL,
    scrapeURLDeclaration,
}