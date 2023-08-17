# book-scraper
This is an app to be used on the terminal to create a page in a Notion database from scraped book information on Goodreads.
It will scrap Goodreads for the book title, cover, and author, and assign this information as properties of the newly created Notion page.
Great use for creating a library of books in Notion, especially for the gallery view!

In order to use this app, you must [create an integration](https://www.notion.so/my-integrations) on Notion.
Make sure to share your integration with the database you are trying to modify with this app. Resources for doing so can be found [here](https://developers.notion.com/docs/getting-started).
Be sure to follow Step 1 & 2!
Once you have your API key, which you can find on your integration page (starts with secret), copy and paste it in a textfile after the variable name "NOTION_TOKEN". Also add the database ID to which you are adding book pages to; to get this ID, go to the database in Notion, hit the "Share" button in the top right corner, and hit the "Copy Link" button. Paste only the characters after ".so/" and before the "?" into the file after the variable name NOTION_DATABASE. For more information on this, check out [this](https://www.notion.so/my-integrations). This textfile containing the API key and database ID should be saved with the name ".env" in the root directory of the project.

How to use:
1. Open your terminal. Make sure you have node.js installed on your computer.
2. Install other dependencies of the project by running `npm install`.
3. Run the command: `node bs.js`
4. There will be a prompt asking for the Goodreads URL: enter in the Goodreads link for the book you are trying to scrap.
5. After the program successfully runs, a new page with the scrapped book information should show up in your Notion database.
