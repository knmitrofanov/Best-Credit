(function () {
    var sammyApp = Sammy('#content', function () {

        this.get('#/', function (context) {
            this.redirect('#/home');
        });

        this.get('#/home', home.searchingForCredit);
        this.get('#/result', searching.searchingForCredit);
        this.get('#/contacts', contacts.showInfo);
        this.get('#/register', user.register);
        this.get('#/user', user.userInfo);  // opraviiii go da e kakto trqbva sus :id !!!!!

        this.get('#/test', test.test);

    });

    $(function () {
        sammyApp.run('#/');
        toastr.options.positionClass = "toast-top-center";
        toastr.options.timeOut = 2000;
        
        data.users.hasUser(function (user) {
            if (user) {
                $(".auth-container").hide();
                $("#user-info").html(`<span>${user.email}</span>`)

                console.log("ima user");
                console.log(user.email);
            } else {
                $(".nav-item-user").hide();
                console.log("nqma user");
            }
        });

        $(".nav-link-login").on("click", function () {
            $('#loginModal').modal('show');
        });

        $(".modal-register-link").on("click", function () {
            $('#loginModal').modal('hide');
        })

        $("#btn-login").on("click", function () {
            let user = {
                email: $("#login-email").val(),
                password: $("#login-password").val()
            }

            data.users.login(user)
                .then(function (user) {
                    toastr.success("Succsefol log in");
                    $('#loginModal').modal('hide');
                    document.location = '#/home';

                    setTimeout(function () {
                        $(".auth-container").fadeOut(200, function () {
                            $(".nav-item-user").fadeIn(500);
                        });
                    }, 500);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode === 'auth/wrong-password') {
                        toastr.error('Wrong password.');
                    } else if (errorCode === "auth/user-not-found") {
                        toastr.error("Wrong email or password")
                    } else {
                        toastr.error(errorMessage);
                    }
                    console.log(error);
                });
        });

        $('#btn-logout').on("click", function () {
            firebase.auth().signOut()
                .then(function () {
                    toastr.success("Succsefol log out");
                    document.location = '#/home';

                    setTimeout(function () {
                        $(".nav-item-user").fadeOut(200, function () {
                            $(".auth-container").fadeIn(100);
                        });
                    }, 500);
                }).catch(function (error) {
                    toastr.error("Failed to logout please try again")
                });
        })
    });
}());