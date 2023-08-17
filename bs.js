import playwright from 'playwright'; // scrapping book info
import prompt from 'prompt'; // prompt user for goodreads website
import { Client } from "@notionhq/client"; // for adding page to notion db
import dotenv from 'dotenv'; // needed for reading env file

(async () => {
    
    prompt.start();
    dotenv.config();
    
    const p = await prompt.get(['link']);
    const url = p.link;
    
    const browser = await playwright.chromium.launch({headless: true}); 
    const context = await browser.newContext(); 
    const page = await context.newPage(); 
    
    await page.goto(url);
    await page.waitForTimeout(5000); // wait for 5 seconds to load up
    
    let author = await page.locator('div.ContributorLinksList > span > a > span.ContributorLink__name').textContent();
    let title = await page.locator('div.BookPageTitleSection__title > h1').textContent();
    const cover = await page.$eval(".ResponsiveImage", img => img.src);
    
    await browser.close();
    
    // get notion info
    const notion = new Client({   auth: process.env.NOTION_TOKEN, });
    const database_id = process.env.NOTION_DATABASE;
    const response = await notion.pages.create({
        parent: {
            database_id: database_id,
        },
        cover: {
            type: "external",
            external: {
                url: cover
            }
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: title
                        },
                    },
                ],
            },
            "Author": {
                rich_text: [
                    {
                        text: {
                            content: author
                        },
                    },
                ],
            },
        },
    });
    console.log(response);
})();

