# Puppeteer TestingBot Example

This repository contains examples of how to run [Puppeteer](https://pptr.dev/) tests on [TestingBot](https://testingbot.com)'s real browser cloud. With TestingBot, you can test your web applications on real browsers with different versions and operating systems.

## Prerequisites

- Node.js (v14 or newer)
- TestingBot account with API credentials (Key and Secret)

## Setup

1. Clone this repository:
```bash
git clone https://github.com/testingbot/puppeteer-testingbot-example.git
cd puppeteer-testingbot-example
```

2. Install dependencies:
```bash
npm install
```

3. Set your TestingBot credentials:
```bash
export TB_KEY="your-testingbot-key"
export TB_SECRET="your-testingbot-secret"
```

## Running the examples

### Puppeteer Examples

Run tests on different browsers:

```bash
# Run on Chrome
npm run test:puppeteer:chrome

# Run on Firefox
npm run test:puppeteer:firefox 

# Run on Edge
npm run test:puppeteer:edge
```

### Jest Example

Run tests using Jest:

```bash
npm run test:jest
```

### WebdriverIO Example

Run tests using WebdriverIO:

```bash
npm run test:webdriverio
```

## TestingBot Options

When running tests on TestingBot with Puppeteer, you can use various options to customize your testing environment. These options are passed in the WebSocket URL when connecting to TestingBot.

### Basic Settings

- **browserName**: Choose from Chrome, Edge, Firefox
- **browserVersion**: Specify browser version (e.g., "latest", "*", "<=16")
- **platform**: Select OS like WIN10, WIN11, SEQUOIA, LINUX

### Test Configuration

- **screenRecorder**: Enable/disable video recording (default: true)
- **public**: Make test results publicly accessible (default: false)
- **name**: Custom test name
- **build**: Group tests under a build identifier
- **timeout**: Session timeout in seconds (default: 90)
- **maxDuration**: Maximum test duration (default: 1800 seconds)

### Environment Customization

- **timeZone**: Set custom time zone
- **screen-resolution**: Change screen resolution
- **geoCountryCode**: Test from specific country
- **upload**: Upload files to test VM
- **startupFlags**: Customize browser startup flags

### Additional Options

- **blacklist**: Block specific hostnames
- **recordLogs**: Enable/disable logging
- **extra**: Add custom metadata
- **tunnelIdentifier**: Use TestingBot Tunnel

Example usage:

```javascript
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
```

For a complete list of options, visit the [TestingBot Puppeteer Options documentation](https://testingbot.com/support/puppeteer/options.html).

## Learn More

- [TestingBot Puppeteer Documentation](https://testingbot.com/support/puppeteer)
- [Puppeteer Documentation](https://pptr.dev/)
- [Jest Documentation](https://jestjs.io/)
- [WebdriverIO Documentation](https://webdriver.io/)