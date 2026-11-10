describe('TestingBot Website', () => {
  it('should have the right title', async () => {
    await browser.url('/');
    await expect(browser).toHaveTitle(expect.stringContaining('TestingBot'));
  });

  it('should display the TestingBot logo', async () => {
    const logo = await $('.navigation span');
    await logo.waitForExist();
    await expect(logo).toHaveText(expect.stringContaining('TestingBot'));
  });

  it('should link to the features page', async () => {
    await expect($('a[href="/features"]')).toExist();
  });

  it('should take a screenshot', async () => {
    await browser.saveScreenshot('testingbot-webdriverio.png');
  });
});
