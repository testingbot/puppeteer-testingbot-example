# Puppeteer TestingBot Example

This repository contains examples of how to run [Puppeteer](https://pptr.dev/) tests on [TestingBot](https://testingbot.com)'s real browser cloud. With TestingBot, you can test your web applications on real browsers with different versions and operating systems.

## Prerequisites

- Node.js (v14 or newer)
- TestingBot account with API credentials (Key and Secret)

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/puppeteer-testingbot-example.git
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
- **platform**: Select OS like WIN10, WIN11, SONOMA

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
const browser = await puppeteer.connect({
  browserWSEndpoint: `wss://${TB_KEY}:${TB_SECRET}@cloud.testingbot.com/puppeteer?browserName=chrome&browserVersion=latest&platform=WIN10&name=My%20Test&build=Build123&screenRecorder=true&timeZone=America/New_York&screen-resolution=1920x1080`
});
```

For a complete list of options, visit the [TestingBot Puppeteer Options documentation](https://testingbot.com/support/puppeteer/options.html).

## GitHub Actions Integration

This repository includes a GitHub Actions workflow that runs the Chrome test on TestingBot. To use it, add your TestingBot credentials as GitHub secrets:

1. Go to your GitHub repository settings
2. Navigate to Secrets > Actions
3. Add two secrets:
   - `TB_KEY`: Your TestingBot key
   - `TB_SECRET`: Your TestingBot secret

## Learn More

- [TestingBot Puppeteer Documentation](https://testingbot.com/support/puppeteer)
- [Puppeteer Documentation](https://pptr.dev/)
- [Jest Documentation](https://jestjs.io/)
- [WebdriverIO Documentation](https://webdriver.io/)