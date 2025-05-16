const puppeteer = require('puppeteer-core');

(async () => {
  console.log('Launching Chrome on TestingBot...');
  const capabilities = {
    'tb:options': {
        key: process.env.TB_KEY,
        secret: process.env.TB_SECRET,
        name: 'Puppeteer Chrome Test'
    },
    browserName: 'chrome',
    browserVersion: 'latest',
    platform: 'WIN10',
  };
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://cloud.testingbot.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  });
  
  try {
    console.log('Browser connected. Starting test...');
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1366, height: 768 });
    
    await page.goto('https://testingbot.com', { waitUntil: 'networkidle0' });
    console.log(`Page loaded: ${await page.title()}`);
    
    await page.screenshot({ path: 'testingbot-chrome.png' });
    console.log('Screenshot taken');
    
    await page.waitForSelector('.navigation span');
    const logoText = await page.evaluate(() => {
      return document.querySelector('.navigation span').innerText;
    });
    
    console.log(`Found logo text: ${logoText}`);
    
    if (logoText.includes('TestingBot')) {
      console.log('Test passed!');
    } else {
      console.error('Test failed: Logo text not found');
      process.exit(1);
    }
  } catch (err) {
    console.error('Test failed with error:', err);
    process.exit(1);
  } finally {
    await browser.close();
    console.log('Test completed. Browser closed.');
  }
})();