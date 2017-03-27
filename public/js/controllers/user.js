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

                    let userData = {
                        name: $("#register-name").val(),
                        lastName: $("#register-last-name").val(),
                        ucn: $("#register-ucn").val(),
                        phone: $("#register-phone").val(),
                        city: $("#register-city").val(),
                        address: $("#register-address").val()
                    }

                    data.register(user)
                        .then(function () {
                            data.users.hasUser(function (user) {
                                if (user) {
                                    data.users.writeUserData(userData, user.uid);
                                } else {
                                    toastr.error("Registration failed!");
                                }
                            });
                        })
                        .then(function () {
                            toastr.success('User registered!');
                            setTimeout(function () {
                                context.redirect('#/');
                                document.location.reload(true);
                            }, 1500);
                        })
                        .catch(function (error) {
                            let errorMessage = error.message;
                            toastr.error(errorMessage);
                        });
                });
            });
    }

    function userInfo(context) {

        data.users.hasUser(user => {
            if (user) {
                firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
                    userData = snapshot.val();

                    var userEmail = firebase.auth().currentUser.email;

                    console.log(userEmail);

                    userData["email"] = userEmail;
                    console.log(userData);

                    templates.get('user-profile')
                        .then(function (template) {
                            context.$element().html(template(userData));

                            $("#btn-submit-profile-change").hide();

                            $("#btn-profile-change").on("click", function () {

                                $("#btn-submit-profile-change").show();
                                $("#btn-profile-change").hide();

                                $(".user-info").css({
                                    "pointer-events": "all",
                                    "background-color": "white"
                                });

                                $(".profile-label").css("background-color", "white");
                            });

                            $("#btn-submit-profile-change").on("click", function () {
                                // dobavi update na informaciqta
                            });
                        });
                });
            } else {
                console.log("Failed to get user data!");
            }
        });

    }
    return {
        register,
        userInfo
    };
}());