import { Client } from "@notionhq/client";
import fetch from 'node-fetch';
import { load } from 'cheerio';
import prompt_ from 'prompt-sync';
import * as dotenv from 'dotenv';

// get api key
dotenv.config();
const NOTION_API_KEY = process.env.API_KEY;
const notion = new Client({ auth: NOTION_API_KEY });

// get goodreads info for scraping
const prompt = prompt_();
const prompt_url = prompt("Goodreads URL: ");
const url = prompt_url;

const database_id = "778516b4cdd340d3ad745b5b13c75f82";
//const database_id = db.slice(22, 54);

// scrape goodreads for book info
const response = await fetch(url);
const body = await response.text();
let $ = load(body);

// loading in jsonLD info
const jsonRaw = $("script[type='application/ld+json']")[0].children[0].data; 
const result = JSON.parse(jsonRaw);
const authors = result.author[0];

let title = result.name;
let author = authors.name;
let cover = result.image;

// create a page in notion database with scraped book info as properties
(async () => {
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
