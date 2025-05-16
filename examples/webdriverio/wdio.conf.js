const TB_KEY = process.env.TB_KEY || 'Your TestingBot Key';
const TB_SECRET = process.env.TB_SECRET || 'Your TestingBot Secret';

exports.config = {
  user: TB_KEY,
  key: TB_SECRET,
  
  specs: [
    './examples/webdriverio/test.js'
  ],
  
  maxInstances: 1,
  
  capabilities: [{
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'WIN10',
    'tb:options': {
      name: 'WebdriverIO Example Test',
      build: 'webdriverio-testingbot-example'
    }
  }],

  services: [['testingbot', {}]],
  
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://testingbot.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};