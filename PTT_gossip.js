require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google', async function() {
        await driver.get('https://www.ptt.cc/bbs/index.html');
        await driver.findElement(By.xpath("//a[@href='/bbs/Gossiping/index.html']")).click();
        await driver.findElement(By.className('btn-big')).click();
        let title = await driver.getTitle();
        console.log((assert.equal(title, '看板 Gossiping 文章列表 - 批踢踢實業坊'))?'Successfully into:':'Failed Gossiping');
    });
})