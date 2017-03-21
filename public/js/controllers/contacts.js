var contacts = (function () {


    function showInfo(context) {

        templates.get('contacts')
            .then(function (template) {
                context.$element().html(template());
            });
    }
    return {
        showInfo
    };
}());