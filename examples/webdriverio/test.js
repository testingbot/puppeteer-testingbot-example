describe('TestingBot Website', () => {
  it('should have the right title', async () => {
    await browser.url('/');
    await expect(browser).toHaveTitle(expect.stringContaining('TestingBot'));
  });

  it('should display the TestingBot logo', async () => {
    await $('.navbar-brand').waitForExist();
    const logoText = await $('.navbar-brand').getText();
    await expect(logoText).toContain('TestingBot');
  });

  it('should have a features section', async () => {
    const featuresSection = await $('.features');
    await expect(featuresSection).toExist();
  });

  it('should take a screenshot', async () => {
    await browser.saveScreenshot('testingbot-webdriverio.png');
  });
});