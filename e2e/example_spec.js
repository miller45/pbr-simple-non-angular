

describe('w3page', function () {

    beforeEach(async() => {
        await browser.waitForAngularEnabled(false);
    });

    it('question element should contain the correct text', async () => {
        await browser.get('https://www.w3.org/International/questions/qa-personal-names.en');
        expect(element(by.css('#question a')).getText()).toEqual('QUESTION');
    });

    it('WoT news element should container correct header', async () => {
        await browser.get('https://www.w3.org/WoT/');
        expect(element(by.css('#news h2')).getText()).toEqual('W3C Begins Standards Work on Web of Things to Reduce IoT Fragmentation');
    });
});