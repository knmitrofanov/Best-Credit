var test = (function () {


    function test(context) {


        data.test()
            .then(function (snapshot) {
                var name = snapshot.child('b').val();
                // console.log(name);
              
                return templates.get('test')
                    .then(function (template) {
                        context.$element().html(template(name));

                    });
            })




    }



    return {
        test: test
    };
}());