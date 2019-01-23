import {assert} from 'chai';

describe('integration tests for desktop browsers', function () {

    context('Shadow DOM - nested Shadow roots', function() {
        beforeEach(async function () {
            await browser.url('/');
        });

        it('can find the mens outerwear image using getAttribute (getAttribute)', async function() {
            const selector = 'shop-app shop-home .item:first-of-type shop-image img';
            const expected = 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg';
            assert.equal(await browser.getAttribute(selector, 'src'), expected)
        });
     });
});