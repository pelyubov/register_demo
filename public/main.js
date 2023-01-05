const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.getElementById('msg');
const checkUsername = (name) => {
    if (name == '' || name == null) {
        msgBox('Username require.');
        return false;
    }
};

const checkEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = re.test(String(email).toLowerCase());
    if (isEmail == false) {
        msgBox('Invalid email.');
    }
    return isEmail;
};

const checkPassword = (password) => {
    if (password == '' || password == null) {
        msgBox('Password require.');
        return false;
    }
    if (password.length < 6) {
        msgBox('Password must have 6 characters or greater');
        return false;
    }
};

const check = (username, email, password) => {
    if (checkUsername(username) == false) {
        return false;
    }
    if (checkEmail(email) == false) {
        return false;
    }
    if (checkPassword(password) == false) {
        return false;
    }
    return true;
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
        msg.style.display = 'none';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/addUser');
        xhr.setRequestHeader('Content-type', 'application/json'); ///
        xhr.send(JSON.stringify(info));
        xhr.onload = () => {
            // window.location.href = '/login';
            const text = xhr.response;
            msgBox(text);
        };
    }
});

const msgBox = (message) => {
    msg.innerHTML = message;
    msg.style.display = 'block';
};
