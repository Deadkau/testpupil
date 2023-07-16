module.exports = {

    before(browser) {
    browser 
.maximizeWindow()
.page.store()
.navigate()
.waitForElementVisible('@welcome','Страница загружена');
},

'Поиск ручка Parker': function (browser) {
    
    let word = browser.globals.searchText;
    
    browser.page.store()
    .search(word)
    .waitForElementVisible('@pageTitle', 'загружено')
    .assert.titleContains('TestGym', 'Заголовок подтвержден')
    .assert.textContains('.card-title', 'Ручка')
},

};
