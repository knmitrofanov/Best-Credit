var contacts = (function () {


    function showInfo(context) {

        return templates.get('contacts')
            .then(function (template) {
                context.$element().html(template());
            });
    }
    return {
        showInfo
    };
}());