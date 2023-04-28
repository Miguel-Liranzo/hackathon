import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  await page.goto('https://www.grubhub.com/restaurant/mcdonalds-2630-jerome-ave-bronx/1338374');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  console.log('Got the information!', await page.content())

  await browser.close();
})();
