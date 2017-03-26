let bank = (function () {


    function getBankDetails(context) {



        templates.get('bank-details')
            .then(function (template) {
                context.$element().html(template());

            });
    }


    return {
        getBankDetails
    };
}());