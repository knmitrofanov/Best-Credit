(function () {
    var sammyApp = Sammy('#content', function () {

        this.get('#/', function (context) {
            this.redirect('#/home');
        });

        this.get('#/home', home.searchingForCredit);
        this.get('#/result', searching.searchingForCredit);
        this.get('#/contacts', contacts.showInfo);

        this.get('#/test', test.test);

    });

    sammyApp.run('#/');
}());