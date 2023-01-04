const checkUsername = (name) => {
    if (name == "" || name == null) {
        alert("Username")
        return false
    }
} 

const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = re.test(String(email).toLowerCase());
    if (isEmail == false) {
        alert("Email")
    }
    return isEmail
}

const checkPassword = (password) => {
    if (password == "" || password.length < 6 || password == null) {
        alert("Username")
        return false
    }
}

const check = (username, email, password) => {
    let isValid = true
    isValid = checkUsername(username);
    isValid = checkEmail(email);
    isValid = checkPassword(password);
    return isValid
}

export default check;