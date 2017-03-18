let home = (function () {


    function homePage(context) {

        data.getBanksInfo().then(function (snapshot) {
            var banks = snapshot.val();
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
        let banks,
            creditType,
            amount,
            creditTerm,
            currency,
            monthlyAmount,
            totalAmount,
            interest,
            tax;


        templates.get('home')
            .then(function (template) {
                context.$element().html(template());

                $('#btn-search-credit').on('click', function () {

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

                        var service = "credits";
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
                                creditType
                                break;
                        }

                        if (creditType === 'Моля изберете') {
                            toastr.error('Моля въведете желания от Вас вид кредит');
                            $('#credit-type').addClass('red-frame');
                            return;
                        }

                        // context.redirect('#/result')

                        var ne6to = context.path;
                        console.log(ne6to);
                        console.log(banks);



                        console.log(creditType);
                        console.log(currency);
                        for (let key in banks) {
                            console.log(banks[key][service][creditType][currency.toLowerCase()]);
                            interest = amount * (banks[key][service][creditType][currency.toLowerCase()] / 100);
                            totalAmount = amount * 1 + interest;
                            monthlyAmount = totalAmount / creditTerm;
                            // tax = amount *  dopi6i za taksata

                            banks[key]['totalAmount'] = totalAmount.toFixed(2);
                            banks[key]['interest'] = interest;
                            banks[key]['monthlyAmount'] = monthlyAmount.toFixed(2);
                            console.log(banks[key]);


                        }


                        return templates.get('searching-credit').then(template => {
                            context.$element().html(template(banks))
                            $(document).scrollTop(0);
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