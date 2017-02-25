var searching = (function () {


    function searchingForCredit(context) {

        var banks;
        
        $('#search').on('click', function () {
            data.getBanksInfo().then(function (snapshot) {
                    banks = snapshot.val()

                    return templates.get('searching-credit')
                })
                .then(function (template) {
                    context.$element().html(template(banks));
                });
        })
    }


    return {
        searchingForCredit: searchingForCredit
    };
}());