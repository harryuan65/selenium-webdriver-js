var webdriver = require('selenium-webdriver');
require('chromedriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var By = webdriver.By;
driver.get('http://www.wibibi.com/info.php?tid=194');
//driver.findElement(By.xpath("//select[name='YourLocation']")).click();
selectFromDropdown('Taoyuan');
driver.sleep(2000);

function selectFromDropdown(v){
    const valueSelected = By.css('[name="YourLocation"]' +' option[value="' + v +'"]');
    driver.findElement(By.xpath('//select[@name="YourLocation"]')).click();
    driver.findElement(valueSelected).click();
}