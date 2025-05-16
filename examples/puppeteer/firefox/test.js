const puppeteer = require('puppeteer-core');

const TB_KEY = process.env.TB_KEY || 'Your TestingBot Key';
const TB_SECRET = process.env.TB_SECRET || 'Your TestingBot Secret';

(async () => {
  console.log('Launching Firefox on TestingBot...');
  
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://${TB_KEY}:${TB_SECRET}@cloud.testingbot.com/puppeteer?browserName=firefox&browserVersion=latest&platform=WIN10&name=Puppeteer-Firefox-Example&screenRecorder=true`
  });
  
  try {
    console.log('Browser connected. Starting test...');
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1366, height: 768 });
    
    await page.goto('https://testingbot.com', { waitUntil: 'networkidle0' });
    console.log(`Page loaded: ${await page.title()}`);
    
    await page.screenshot({ path: 'testingbot-firefox.png' });
    console.log('Screenshot taken');
    
    await page.waitForSelector('.navbar-brand');
    const logoText = await page.evaluate(() => {
      return document.querySelector('.navbar-brand').innerText;
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