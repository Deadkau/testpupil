module.exports = {

    before(browser) {
    browser 
.maximizeWindow()
.page.store()
.navigate()
.waitForElementVisible('@welcome','Страница загружена');
},

'Поиск товара': function (browser) {
    
    let word = browser.globals.searchText;
    
    browser.page.store()
    .search(word)
    .waitForElementVisible('@pageTitle', 'загружено')
    .assert.titleContains('TestGym', 'Заголовок подтвержден')
    .assert.textContains('@cardTitle', word)
    
},
};
