(function () {
    var sammyApp = Sammy('#content', function () {

        this.get('#/', function (context) {
            this.redirect('#/home');
        });

        this.get('#/home', home.homePage)

        this.get('#/test', test.test);

    });

    sammyApp.run('#/');
}());