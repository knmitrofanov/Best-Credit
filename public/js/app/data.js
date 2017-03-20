var data = (function () {

  function register(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
  }

  function login(user) {

    let error = validator.validateUrl(user.email);

    if (error) {
      return Promise.reject(error);
    }
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  function hasUser(user) {
    return firebase.auth().onAuthStateChanged(user);
  }

  function test() {

    firebase.auth().signInWithEmailAndPassword("rodmi@abv.bg", '123456')
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("ima user");
        console.log(user.email);
      } else {
        console.log("nqma user");
      }
    });

    // var user = firebase.UserInfo
    // console.log(user);
    // console.log(user.getEmail());


    var database = firebase.database().ref('a'); // v ref slaga6 elementa do koito iska da stigne6

    var result = database.once('value');

    var a = database.once('value').then(function (snapshot) {
      var key = snapshot.key; // null
      var childKey = snapshot.val();
      console.log(childKey);
    })

    // console.log(a);

    return result;


  }

  function getBanksInfo() {
    var database = firebase.database().ref('banks');
    return database.once('value');

  }

  return {
    test: test,
    register: register,
    getBanksInfo: getBanksInfo,
    users: {
      login: login,
      hasUser: hasUser
    }

  }

}());