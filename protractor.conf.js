const HtmlReporter = require('protractor-beautiful-reporter');
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    directConnect: true,
    specs: [
        './e2e/*_spec.js'
    ],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'binary': 'D:\\sodechromium\\chrome-win32\\chromium.exe',
            'args': ['--headless',
                '--disable-gpu',
                '--no-sandbox']
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    onPrepare() {
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                baseDirectory: 'e2e-report',
                screenshotsSubfolder: 'screenshots'
            }).getJasmine2Reporter()
        );
    }
};

