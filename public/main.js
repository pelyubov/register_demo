const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const checkUsername = (name) => {
    if (name == '' || name == null) {
        alert('Username');
        return false;
    }
};

const checkEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = re.test(String(email).toLowerCase());
    if (isEmail == false) {
        alert('Email');
    }
    return isEmail;
};

const checkPassword = (password) => {
    if (password == '' || password.length < 6 || password == null) {
        alert('Username');
        return false;
    }
};

const check = (username, email, password) => {
    if (checkUsername(username)) {
        return false;
    }
    if (checkEmail(email)) {
        return false;
    }
    if (checkPassword(password)) {
        return false;
    }
};

let isValid = check.default(
    username.value.trim(),
    email.value.trim(),
    password.value
);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isValid) {
        const register = require('./register.js');
        register.default();
    }
});
