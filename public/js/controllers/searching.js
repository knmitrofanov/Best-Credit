let searching = (function () {


    // function searchingForCredit(context) {

    //     const service = "credits";

    //     let banks,
    //         creditType,
    //         amount,
    //         creditTerm,
    //         currency,
    //         monthlyAmount,
    //         totalAmount,
    //         interest,
    //         tax;

    //         let searchingInfo = {};


    //     data.getBanksInfo().then(snapshot => {
    //         banks = snapshot.val();
    //         creditType = $('#credit-type').val();
    //         amount = $('#credit-amount').val();
    //         creditTerm = $('#creditTerm').val();
    //         currency = $('#credit-currency').val();

    //         searchingInfo["creditType"] = creditType;
    //         searchingInfo["amount"] = amount;
    //         searchingInfo["creditTerm"] = creditTerm;
    //         searchingInfo["currency"] = currency;

    //         // Object.keys(banks).forEach(x => {
    //         //     console.log(x);
    //         //     console.log(x.hasOwnProperty("credits"));
    //         // })

    //         switch (creditType) {
    //             case 'Consumer credit':
    //                 creditType = 'consumer';
    //                 break;
    //             case 'Mortgage credit':
    //                 creditType = 'mortgage';
    //                 break;
    //             case 'Housing credit':
    //                 creditType = 'housing';
    //                 break;
    //             default:
    //                 creditType
    //                 break;
    //         }

    //         if (creditType === 'Please choose') {
    //             toastr.error('Please choose type of credit');
    //             $('#credit-type').addClass('red-frame');
    //             return;
    //         }

    //         // context.redirect('#/result')

    //         var ne6to = context.path;

    //         for (let key in banks) {
    //             console.log(banks[key][service][creditType][currency.toLowerCase()]);
    //             interest = amount * (banks[key][service][creditType][currency.toLowerCase()] / 100);
    //             totalAmount = amount * 1 + interest;
    //             monthlyAmount = totalAmount / creditTerm;
    //             // tax = amount *  dopi6i za taksata

    //             banks[key]['totalAmount'] = totalAmount.toFixed(2);
    //             banks[key]['interest'] = interest;
    //             banks[key]['monthlyAmount'] = monthlyAmount.toFixed(2);
    //             banks[key]["searchingInfo"] = searchingInfo;
    //             console.log(banks);

    //         }


    //         return templates.get('searching-credit').then(template => {
    //             context.$element().html(template(banks))
    //             $(document).scrollTop(0);
    //         })
    //     })
    // }


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