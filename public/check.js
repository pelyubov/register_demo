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

const msgBox = (message) => {
    msg.innerHTML = message;
    msg.style.display = 'block';
};

export { check, msgBox };
