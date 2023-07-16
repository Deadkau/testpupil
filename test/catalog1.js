module.exports = {

    before(browser) {
    browser 
.maximizeWindow()
.page.store()
.navigate()
.waitForElementVisible('@welcome','Страница загружена');
},

'click Parker': function (browser) {

    browser.strictClick('[href*=mycart]')
   
},

}
