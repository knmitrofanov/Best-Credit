let searching = (function () {


    function searchingForCredit(context) {

        let banks;


        data.getBanksInfo().then(function (snapshot) {
                banks = snapshot.val();

                return templates.get('searching-credit')
            })
            .then(function (template) {
                context.$element().html(template(banks));
                $(document).scrollTop(0);
            });

    }


    return {
        searchingForCredit: searchingForCredit
    };
}());