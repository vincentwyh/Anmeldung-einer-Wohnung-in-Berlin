import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://service.berlin.de/dienstleistung/120686/',
      show: true
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'github'
}