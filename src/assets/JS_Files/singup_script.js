const singup_overlay = document.getElementById('singup_popup_overlay'),
    singup_popup = document.getElementById('singup_popup');

const singup_open = document.getElementById('open_singup');

singup_open.addEventListener('click', function () {
    singup_overlay.classList.add('singup_active');
    singup_popup.classList.add('singup_active');
});

const singup_close = document.getElementById('btn-cerrar-singup_popup');

singup_close.addEventListener('click', function (e) {
    e.preventDefault();
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
});

const open_login = document.getElementById('open_login');

open_login.addEventListener('click', function () {
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
    const login_overlay = document.getElementById('login_popup_overlay'),
        login_popup = document.getElementById('login_popup');
    login_overlay.classList.add('login_active');
    login_popup.classList.add('login_active');
});

const singup_sin_vision = document.getElementById('singup_sin_vision'),
    singup_vision = document.getElementById('singup_vision');

singup_sin_vision.addEventListener('click', function () {
    singup_sin_vision.classList.remove('singup_activation');
    singup_vision.classList.add('singup_activation');
});

singup_vision.addEventListener('click', function () {
    singup_sin_vision.classList.add('singup_activation');
    singup_vision.classList.remove('singup_activation');
});

const singup_password = document.getElementById('singup_password'),
    singup_repit_password = document.getElementById('singup_repit_password');

singup_sin_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('singup_activation')) {
        singup_password.type = "text";
        singup_repit_password.type = "text";
    } else {
        singup_password.type = "password";
        singup_repit_password.type = "password";
    }
});

singup_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('singup_activation')) {
        singup_password.type = "text";
        singup_repit_password.type = "text";
    } else {
        singup_password.type = "password";
        singup_repit_password.type = "password";
    }
});

const singup_name_field = document.getElementById('name-field');
const singup_surname_field = document.getElementById('surname-field');
const singup_email_field = document.getElementById('email-field');
const singup_warnings = document.getElementById('singup_warnings');
const singup_checkbox = document.getElementById('selector');

function singupFormSubmit() {
    singup_warnings.classList.add('w_inactive');
    singup_warnings.innerHTML = "";
    let singup_errores = "";
    let singup_email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let singup_password_regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
    let name_surname_regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    let singup_error = false;
    if (singup_name_field.value.length === 0) {
        singup_errores += 'El nombre no puede estar vacío<br>';
        singup_error = true;
    }
    if (!name_surname_regex.test(singup_name_field.value)) {
        singup_errores += 'El nombre no es correcto<br>';
        singup_error = true;
    }
    if (singup_surname_field.value.length === 0) {
        singup_errores += 'El apellido no puede estar vacío<br>';
        singup_error = true;
    }
    if (!name_surname_regex.test(singup_surname_field.value)) {
        singup_errores += 'El apellido no es correcto<br>';
        singup_error = true;
    }
    if (singup_email_field.value.length === 0) {
        singup_errores += 'El correo no puede quedar vacío<br>';
        singup_error = true;
    }
    if (!singup_email_regex.test(singup_email_field.value)) {
        singup_errores += 'El correo es incorrecto<br>';
        singup_error = true;
    }
    if (singup_password.value.length === 0 && singup_repit_password.value.length === 0) {
        singup_errores += 'Las contraseñas no pueden estar vacias<br>';
        singup_error = true;
    }
    if (singup_password.value.length < 6 || singup_password.value.length > 16) {
        singup_errores += 'La contraseña debe tener más de 6 caracteres y menos de 16<br>'
        singup_error = true;
    }
    if (!singup_password_regex.test(singup_password.value)) {
        singup_errores += 'La contraseña debe tener al menos un digito, una minuscula y una mayuscula<br>';
        singup_error = true;
    }
    if (!singup_password.value === singup_repit_password.value) {
        singup_errores += 'Las contraseñas deben ser iguales<br>';
        singup_error = true;
    }
    if (!singup_checkbox.checked) {
        singup_errores += 'Debe aceptar las condiciones de uso<br>';
        singup_error = true;
    }
    if (singup_error) {
        singup_warnings.classList.remove('w_inactive');
        singup_warnings.innerHTML = singup_errores;
        return false;
    } else {
        return true;
    }
}