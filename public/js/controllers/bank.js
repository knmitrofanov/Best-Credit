let bank = (function () {


    function getBankDetails(context) {

        let bankName = context.params.id;



        data.getBanksInfo().then(snapshot => {
            let bank = snapshot.child(bankName).val();

            return templates.get('bank-details')
                .then(function (template) {
                    context.$element().html(template(bank));

                });
        });
    }


    return {
        getBankDetails
    };
}());