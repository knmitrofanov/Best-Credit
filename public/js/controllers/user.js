var user = (function () {


    function register(context) {

        templates.get('register')
            .then(function (template) {
                context.$element().html(template());

                $(".btn-register").on("click", function () {
                    let user = {
                        email: $("#register-email").val(),
                        password: $("#register-password").val()
                    };

                    data.register(user)
                        .then(function () {
                            toastr.success('User registered!');
                            setTimeout(function () {
                                context.redirect('#/');
                                document.location.reload(true);
                            }, 500);
                        })
                        .catch(function (error) {
                            let errorMessage = error.message;
                            toastr.error(errorMessage);

                            console.log(error);
                        });

                    var userData = {
                        name: $("#register-name").val(),
                        lastName: $("#register-last-name").val(),
                        ucn: $("#register-ucn").val(),
                        phone: $("#register-phone").val(),
                        city: $("#register-city").val(),
                        address: $("#register-address").val()
                    }

                    data.users.hasUser(function (user) {
                        if (user) {
                            data.users.writeUserData(userData, user.uid);
                        } else {
                            toastr.error("Registration failed!");
                        }
                    });
                });
            });
    }

    function userInfo(context) {

        var userId = firebase.auth().currentUser.uid;
        
        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            userData = snapshot.val();

            templates.get('user-info')
                .then(function (template) {
                    context.$element().html(template(userData));
                });

        })



    }
    return {
        register,
        userInfo
    };
}());