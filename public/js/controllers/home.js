var home = (function () {


    function homePage(context) {

        data.getBanksInfo().then(function (snapshot) {
            var banks = snapshot.val()
            console.log(banks);
            console.log(snapshot.child('societe').val());

            templates.get('home')
                .then(function (template) {
                    context.$element().html(template(banks));
                    $('#search-credit').on('click', function () {
                        alert('ddd')
                    })
                });
        })
    }

    function searchingForCredit(context) {
        var banks,
            creditType,
            amount,
            creditTerm,
            currency,
            monthlyAmount,
            totalAmount;

        templates.get('home')
            .then(function (template) {
                context.$element().html(template());

                $('#search-credit').on('click', function () {

                    data.getBanksInfo().then(snapshot => {
                        banks = snapshot.val();
                        creditType = $('#credit-type').val();
                        amount = $('#credit-amount').val();
                        creditTerm = $('#creditTerm').val();
                        currency = $('#credit-currency').val();

                        // Object.keys(banks).forEach(x => {
                        //     console.log(x);
                        //     console.log(x.hasOwnProperty("credits"));
                        // })

                        var a = "credits";
                        var b = "housing";
                        var c = "bgn";

                        switch (creditType) {
                            case 'Потребителски кредити':
                                creditType = 'consumer';
                                break;
                            case 'Ипотечен кредит':
                                creditType = 'mortgage';
                                break;
                            case 'Жилищен кредит':
                                creditType = 'housing';
                                break;
                            default:
                                break;
                        }

                        console.log(creditType);
                        console.log(currency);
                        for (let key in banks) {
                            console.log(banks[key][a][creditType][currency.toLowerCase()] * 1000000);


                        }


                        if (creditType === 'Изберете') {
                            toastr.error('Моля въведете желания от Вас вид кредит');
                            $('#credit-type').addClass('red-frame');
                            return;
                        }

                        return templates.get('searching-credit').then(template => {
                            context.$element().html(template(banks));
                        })
                    })
                })
            });


    }



    return {
        homePage: homePage,
        searchingForCredit: searchingForCredit
    };
}());