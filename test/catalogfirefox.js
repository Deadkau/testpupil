module.exports = {

    before(browser) {
    browser 
.maximizeWindow()
.page.store()
.navigate()
.waitForElementVisible('@welcome','Страница загружена');
},

'Поиск монокуляр Veber': function (browser) {

    let word = browser.globals.searchText;

    browser.page.store()
    .search(word)
    .waitForElementVisible('@pageTitle', 'страница загружена')
    .assert.titleContains('TestGym', 'Заголовок подтвержден')
    .assert.textContains('body', 'Монокуляр Veber 7-21x21W ZOOM')
},

};
