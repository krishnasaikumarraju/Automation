// An example configuration file.
exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:13933/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },
  onPrepare: function() {
    browser.driver.manage().window().setSize();
 },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // ,'example_spec.js' ,'search_spec.js'
  specs: ['example_spec.js', 'search_spec.js' ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    //how does this work
    defaultTimeoutInterval: 70000
  }
};


