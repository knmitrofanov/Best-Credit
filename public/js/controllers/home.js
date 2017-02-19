var home = (function () {


    function homePage(context) {


        // data.searchForCredit()
        //     .then(function (snapshot) {
        //         var name = snapshot.child('b').val();
        //         console.log(name);
            
              
                return templates.get('home')
                    .then(function (template) {
                        context.$element().html(template(name));

                    });
            // })

            


    }



    return {
        homePage: homePage
    };
}());