const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const check = require('./check.js')
let isValid = check.default(username.value.trim(),email.value.trim(),password.value)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (isValid) {
        const register = require("./register.js")
        register.default()
    }
})