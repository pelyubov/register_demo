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
        alert('Password');
        return false;
    }
};

const check = (username, email, password) => {
    if (
        !checkUsername(username) &&
        !checkEmail(email) &&
        !checkPassword(password)
    ) {
        return false;
    } else {
        return true;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let info = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value
    };
    let isValid = check(info.username, info.email, info.password);
    if (isValid) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/addUser');
        xhr.setRequestHeader('Content-type', 'application/json'); ///
        xhr.send(JSON.stringify(info));
        xhr.onload = () => {
            // window.location.href = '#';
            // alert(xhr.responseText(this));
            alert('Request server success');
        };
    }
});
