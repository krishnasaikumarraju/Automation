var Orbita = require('./methods.js');


xdescribe('test Orbita site', function () {
  browser.waitForAngularEnabled(false);
  //browser.debugger();

  //login cookies
  browser.driver.manage().deleteAllCookies();

  //login page testing
  it('empty input fields', async function () {
    //var loginlink = "'https://mayo-api-dev.orbita.cloud:8443'"
    // get testing project login url
    await Orbita.get('https://mayo-api-dev.orbita.cloud:8443');
    var arrObj = [{
      email: "",
      password: ""
    },
    {
      email: "devloper@orbita.ai",
      password: ""
    },
    {
      email: "devloper@orbita.ai",
      password: "123"
    },
    {
      email: "",
      password: "Mayo@RTAPI123#"
    },
    {
      email: "devloper@orbita.ai",
      password: "Mayo@RTAPI123#"
    }
    ];

    for (i = 0; i < arrObj.length; i++) {
      Orbita.setAuth(arrObj[i]);
      
      await Orbita.setButton('//button[contains(@id, "loginbutton")]')
      
      //started after 20 secs of jasmine validation
      browser.sleep(6000)
    }
  });

  //for searchcase login url
  // it('for search', async function(){
  //   await Orbita.get('https://mayo-api-dev.orbita.cloud:8443/project/5a578fb697210d1000bcbe8c/search');
  //   //browser.sleep(30000)
  //   browser.wait(EC.presenceOf(email, 10000))
  //   await element(by.id('mat-input-6')).sendKeys('cancer');
  // })

});



