# book-scraper
This is an app to be used on the terminal to create a page in a Notion database from scraped book information on Goodreads.
It will scrap Goodreads for the book title, cover, and author, and assign this information as properties of the newly created Notion page.
Great use for creating a library of books in Notion, especially for the gallery view!

In order to use this app, you must [create an integration](https://www.notion.so/my-integrations) on Notion.
Make sure to share your integration with the database you are trying to modify with this app. Resources for doing so can be found [here](https://developers.notion.com/docs/getting-started).
Be sure to follow Step 1 & 2!
Once you have your API key, which you can find on your integration page, copy and paste it in a textfile, saving it with the name ".env" in the root directory of the project.

How to use:
1. Open your terminal. Make sure you have node.js installed on your computer.
2. Run the command: `node bs.js`
3. There will be a prompt asking for the Goodreads URL: enter in the Goodreads link for the book you are trying to scrap.
4. There will be a prompt asking for the Notion database: enter in the link for your Notion database.
5. After the program successfully runs, a new page with the scrapped book information should show up in your Notion database.
