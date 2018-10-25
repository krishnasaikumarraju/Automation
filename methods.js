var Orbita = function () {
    email = element(by.name('email'));
    var EC = protractor.ExpectedConditions;
    keyword = element(by.name('keyword'));
    //console.log('hello');
    //console.log(document.querySelector('input[name="keyword"]'));

    // link
    this.get = async function (link) {
        await browser.get(link);
    };

    // authentication
    this.setAuth = async function (arr) {
        for (var key in arr) {
            browser.wait(EC.presenceOf(email, 20000));
            await element(by.name(key)).sendKeys(arr[key]);
            //element(by.name(key)).clear();
        }

//expect(arr.email).toEqual('devloper@orbita.ai') && expect(arr.password).toEqual('Mayo@RTAPI123#')
    }

    //click functions
    this.setButton = async function (xpath) {
        browser.wait(EC.presenceOf(email, 10000))
        await element(by.xpath(xpath)).click();
        browser.sleep(3000)
    }
    //dropdowns
    this.setDropdown = async function (xclick, xselect){
    await element(by.name(xclick)).click(); 
    await element(by.xpath(xselect)).click()
    }
    //input fields for search page 
    this.setTextFields= async function (inpData){
       
        for(var key in inpData ){
        browser.wait(EC.presenceOf(keyword, 8000))
        await element(by.name(key)).clear();
        await element(by.name(key)).sendKeys(inpData[key]);
        browser.sleep(3000);
        }
    }

    //checkbox click
    this.setCheckbox = async function(checkbox){
    for(var key in checkbox){
    //console.log(element(by.xpath(checkbox[key])).getText())
    await element(by.xpath(checkbox[key])).click();
    await element(by.xpath('//span[contains(text(), "Disease")]/parent::label/parent::mat-checkbox/parent::div/parent::div/preceding-sibling::button')).click();
    browser.sleep(2000);
    const number = await element(by.xpath(checkbox[key])).getText();
    console.log(number)
        }
    } 
};
module.exports = new Orbita();

