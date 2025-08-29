import puppeteerCore from "puppeteer-core";
import {BROWSERLESS_TOKEN } from "../config.js";

const scrapeURL = async ({urls}) => {

    let browser;
    try {
        browser = await puppeteerCore.connect({
            browserWSEndpoint: `wss://production-sfo.browserless.io?token=${BROWSERLESS_TOKEN}`,
        });

        if (!browser) return "";
        let response = "";

        for (let i=0; i<Math.min(5, urls.length); i++){
            let url = urls[i];

            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
            await page.goto(url, { waitUntil: 'networkidle0' });
            await page.waitForSelector('body', { timeout: 5000 });

            const data = await page.content();
            await page.close();
            response = response + data;
        }

        return response;
    } catch (error){
        console.log(error.message);
        return "";
    } finally {
        if (browser) await browser.close();
    }
}

const scrapeURLDeclaration = {
    name: "scrapeURL",
    description: "This is a function that will scrape the data from the provided url",
    parameters: {
        type: "OBJECT",
        properties: {
            urls: {
                type : "ARRAY",
                description: "This is contain a set of URLs that are going to be scrapped e.g.: [https://leetcode.com/u/ashokbhatt2048/, https://www.geeksforgeeks.org/user/ashokbhacjou/]",
                items : {
                    type : "STRING",
                }
            }
        },
        required: ["urls"]
    }
}

export {
    scrapeURL,
    scrapeURLDeclaration,
}