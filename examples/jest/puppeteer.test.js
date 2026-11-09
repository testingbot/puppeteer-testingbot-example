const puppeteer = require('puppeteer-core');

const capabilities = {
  'tb:options': {
    key: process.env.TB_KEY,
    secret: process.env.TB_SECRET,
    name: 'Jest-Puppeteer-Example'
  },
  browserName: 'chrome',
  browserVersion: 'latest',
  platform: 'WIN10'
};

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.connect({
    browserWSEndpoint: `wss://cloud.testingbot.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  });
  page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
});

afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

test('TestingBot homepage title should be correct', async () => {
  await page.goto('https://testingbot.com', { waitUntil: 'networkidle0' });
  const title = await page.title();
  expect(title).toContain('TestingBot');
}, 30000);

test('TestingBot logo should be visible', async () => {
  await page.waitForSelector('.navigation span');
  const logoText = await page.evaluate(() => {
    return document.querySelector('.navigation span').innerText;
  });
  expect(logoText).toContain('TestingBot');
}, 10000);

test('TestingBot navigation should link to the features page', async () => {
  const featuresLinks = await page.$$('a[href="/features"]');
  expect(featuresLinks.length).toBeGreaterThan(0);
}, 10000);

test('Take a screenshot', async () => {
  await page.screenshot({ path: 'testingbot-jest.png' });
}, 5000);
