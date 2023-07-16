const pageCommands = {
    search(word) {
        this
        .setValue('@searchBar', [word, browser.Keys.ENTER]);
        return this;
    }
};

module.exports = {
    url: 'http://testshop.sedtest-school.ru',
    commands: [pageCommands],
    elements:{
        welcome: '#navbarCollapse',
        searchBar: 'Input[type=text]',
        pageTitle: 'h4',
        cardTitle: '.card-title'
    }
}