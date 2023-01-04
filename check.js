const check = (user) => {
    if (user.username == '' || user.username == null) {
        console.log('Username');
        return { isValid: false, msg: 'From server: Invalid username.' };
    }
    const checkEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
        user.email == '' ||
        user.email == null ||
        checkEmail.test(String(user.email).toLowerCase())
    ) {
        return { isValid: false, msg: 'From server: Invalid username.' };
    }
    if (user.password == '' || user.password == null) {
        return { isValid: false, msg: 'From server: Invalid password' };
    }
    return { isValid: true, msg: 'Success' };
};

export { check };
