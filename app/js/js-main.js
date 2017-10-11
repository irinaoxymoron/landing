// form

(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;
    
    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function () {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
    };

    me.close = function () {
        form.classList.add('is-hidden');
    };

    window.form = me;

}());

var openFormButton = document.querySelector('.arrow-down');

if (openFormButton) {
    openFormButton.addEventListener('click', function (e) {
        e.preventDefault();
        form.open();
    })
}
