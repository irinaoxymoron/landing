// form
window.ITVDN = {};

var validation = (function () {
    var me = {};

    me.isEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    me.isNumber = function(number) {
        var re = /^\d+$/;
        return re.test(number);
    };

    me.isNotEmpty = function(str) {
        return Boolean(str);
    };

    ITVDN.validation = me;
}());

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

    me.isValid = function () {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните, пожалуйста, все необходимые поля');
            return false;
        } else if (!ITVDN.validation.isEmail(emailValue)) {
            console.log('Некорректный email');
            return false;
        } else if (!ITVDN.validation.isNumber(numberValue)) {
            console.log('Некорректный номер');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function (data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!ITVDN.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    ITVDN.form = me;

}());

(function () {
    // Add event listeners
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');

    if (openFormButton) {
        openFormButton.addEventListener('click', function (e) {
            e.preventDefault();
            ITVDN.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (ITVDN.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }
        })
    }
}());







