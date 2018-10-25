var Orbita = require('./methods.js');
describe('test Orbita site', function () {
  browser.waitForAngularEnabled(false);
  var EC = protractor.ExpectedConditions;
  //browser.debugger();

  //login cookies
  browser.driver.manage().deleteAllCookies();

  //login page base url
  it('empty input fields', async function () {
    await Orbita.get('https://mayo-api-dev.orbita.cloud:8443');
    var Obj = {
      email: "devloper@orbita.ai",
      password: "Mayo@RTAPI123#"
    };
    Orbita.setAuth(Obj);
    await Orbita.setButton('//button[contains(@id, "loginbutton")]')
    browser.wait(EC.presenceOf(email, 2000))
    browser.sleep(5000)
  });

  //for searchcase for english
  it('for search', async function () {
    // await Orbita.setButton('//mat-grid-list[contains(@class, "mat-grid-list") ][1]/div/mat-grid-tile[2]/figure/mat-card/div/div/mat-card-content/mat-card-title-group/div[2]/mat-card-subtitle/div/p')
    // browser.sleep(2000)
    // await Orbita.setButton('//div[contains(@class,  "title-menu title-text menu-container title-sub-menu")]')
    // browser.sleep(2000)

    await element(by.xpath('//mat-grid-list[contains(@class, "mat-grid-list") ][1]/div/mat-grid-tile[2]/figure/mat-card/div/div/mat-card-content/mat-card-title-group/div[2]/mat-card-subtitle/div/p')).click();
    browser.sleep(3000)
    await element(by.xpath('//div[contains(text(), " Search")]')).click()
    browser.sleep(2000)
    var inputObjArr = [
      {
        keyword: "cancer"
      },
      {
        startDate: ""
      },
      {
        endDate: ""
      },
      {
        size: "4"
      }
    ]
    // input fields
    for (i = 0; i < inputObjArr.length; i++) {
      await Orbita.setTextFields(inputObjArr[i]);
    }
    // organisation
    await Orbita.setDropdown('organization', '//span[contains(text(), "English Test 100")]')
    browser.sleep(2000)
    // language
    await Orbita.setDropdown('language', '//span[contains(text(), "English")]/parent::mat-option')
    browser.sleep(2000)

    // filter
    // await element(by.name('filter')).click()
    // browser.sleep(2000)
    // await element(by.xpath('//span[contains(text(), "All") and contains(@class, 'mat-option-text')]'))
    // browser.sleep(2000)

    // product
    await element(by.name('product')).click()
    await element(by.xpath('//span[contains(text(), "Health  ")]')).click();
    await element(by.xpath('//span[contains(text(), "Wellness  ")]')).click();
    await element(by.xpath('//div[contains(@class, "cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing")]')).click();
    browser.sleep(2000)

    // search click
    await element(by.xpath('//span[contains(text(), "Search")]')).click();
    browser.sleep(10000)

    //text results
    const key = await element(by.xpath('//p[contains(@fxflex, "50")]/child::strong')).getText()
    const count = await element(by.xpath('//p[contains(@fxflex, "50")]/child::span[2]')).getText();
    var trimres = count.substr(9, 4)
    console.log(key + trimres + " results")

  })

  //for Spanish
  xit('for spanish', async function(){
    var inputObj = 
      {
        keyword: "cáncer"
      }

   Orbita.setTextFields(inputObj)

   // organisation
   await Orbita.setDropdown('organization', '//span[contains(text(), "Spanish Test 100  ")]')
   browser.sleep(2000)
  
   // language
   await Orbita.setDropdown('language', '//span[contains(text(), "Spanish")]/parent::mat-option')
   browser.sleep(2000)

  // search click
   await element(by.xpath('//span[contains(text(), "Search")]')).click();
    browser.sleep(10000)
    const key = await element(by.xpath('//p[contains(@fxflex, "50")]/child::strong')).getText()
    const count = await element(by.xpath('//p[contains(@fxflex, "50")]/child::span[2]')).getText();
    var trimres = count.substr(9, 4)
    console.log(key + trimres + " results")

  })

  //for Arabic
  xit('for Arabic', async function(){
    var inputObj = 
      {
        keyword: "سرطان"
      }
    
   Orbita.setTextFields(inputObj)

   // organisation
   await Orbita.setDropdown('organization', '//span[contains(text(), "Arabic Test 10  ")]')
   browser.sleep(2000)
  
   // language
   await Orbita.setDropdown('language', '//span[contains(text(), "Arabic")]/parent::mat-option')
   browser.sleep(2000)

  // search click
   await element(by.xpath('//span[contains(text(), "Search")]')).click();
    browser.sleep(10000)
    const key = await element(by.xpath('//p[contains(@fxflex, "50")]/child::strong')).getText()
    const count = await element(by.xpath('//p[contains(@fxflex, "50")]/child::span[2]')).getText();
    var trimres = count.substr(9, 4)
    console.log(key + trimres + " results")

  })

  //sidebar filters
  it('for side bar filter', async function(){
    var inputObj = 
      {
        keyword: "*"
      }
    
   Orbita.setTextFields(inputObj)

   //organisation
   await Orbita.setDropdown('organization', '//span[contains(text(), "Admin  ")]')
   browser.sleep(2000)

   // search click
   await element(by.xpath('//span[contains(text(), "Search")]')).click();
    browser.sleep(5000)
    const key = await element(by.xpath('//p[contains(@fxflex, "50")]/child::strong')).getText()
    const count = await element(by.xpath('//p[contains(@fxflex, "50")]/child::span[2]')).getText();
    var trimres = count.substr(9, 4)
    console.log(key + trimres + " results")
    //mat-checkbox[contains(@class, "mat-checkbox mat-accent ng-untouched ng-pristine ng-valid mat-checkbox-checked")]/label/span
    var checkObj = [
      {'Disease' : '//span[contains(text(), "Disease")]/parent::label'},
      {'Age 45 to 56 Middle' : '//span[contains(text(), "45 to 64 middle")]'},
      {'Gender Feamle':'//span[contains(text(), "Female")]'},
      {'Focus Causal Risk Factor ':'//span[contains(text(), "Causal Risk Factor")]'}
    ]
    
    
    for(i=0; i<checkObj.length; i++){
    await Orbita.setCheckbox(checkObj[i]);
    }
    //await element(by.xpath('//span[contains(text(), "Disease")]/parent::label')).click();
    
  })

});