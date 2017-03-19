var user = (function () {


    function register(context) {

        return templates.get('register')
            .then(function (template) {
                context.$element().html(template());
            });
    }
    return {
        register
    };
}());