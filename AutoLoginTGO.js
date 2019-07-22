require('chromedriver');
const assert = require('assert');
var addZero = require('add-zero');

const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Try Login TGO', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Login TGO', async function() {
        var d = new Date();
        while(true){
             if(new Date()-d >=1000){
              var h = addZero(d.getHours());
              var m = addZero(d.getMinutes());
              var s = addZero(d.getSeconds());
              console.log(h + ":" + m + ":" + s);
                d = new Date();
                if(h>=22 && m >=30)
                break;
             };    
        }
        console.log('******Mission Start*******');
        let title='';
        await driver.get('https://tgo.thsrc.com.tw/login.html');
        await driver.findElement(By.id('loginID')).sendKeys('H125235230', Key.RETURN);
        await driver.findElement(By.id('pwd')).sendKeys('ck608599', Key.RETURN);
        while(true){
            console.log('****已按下登入****');
            await driver.findElement(By.id('login_btn')).click();//login_btn
        }
        title = await driver.getTitle();
       // assert.equal(title, 'selenium - Google Search');
    });
    //driver&&driver.quit();
})