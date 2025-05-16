const puppeteer = require('puppeteer-core');

const TB_KEY = process.env.TB_KEY || 'Your TestingBot Key';
const TB_SECRET = process.env.TB_SECRET || 'Your TestingBot Secret';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.connect({
    browserWSEndpoint: `wss://${TB_KEY}:${TB_SECRET}@cloud.testingbot.com/puppeteer?browserName=chrome&browserVersion=latest&platform=WIN10&name=Jest-Puppeteer-Example&screenRecorder=true`
  });
  page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
});

afterAll(async () => {
  await browser.close();
});

test('TestingBot homepage title should be correct', async () => {
  await page.goto('https://testingbot.com', { waitUntil: 'networkidle0' });
  const title = await page.title();
  expect(title).toContain('TestingBot');
}, 30000);

test('TestingBot logo should be visible', async () => {
  await page.waitForSelector('.navbar-brand');
  const logoText = await page.evaluate(() => {
    return document.querySelector('.navbar-brand').innerText;
  });
  expect(logoText).toContain('TestingBot');
}, 10000);

test('TestingBot features section should exist', async () => {
  const featuresExist = await page.evaluate(() => {
    return document.querySelectorAll('.features').length > 0;
  });
  expect(featuresExist).toBe(true);
}, 10000);

test('Take a screenshot', async () => {
  await page.screenshot({ path: 'testingbot-jest.png' });
}, 5000);