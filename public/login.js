const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.getElementById('msg');
import { check, msgBox } from './check.js';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let info = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value
    };
    let isValid = check(info.username, info.email, info.password);
    console.log('Is run there?');
    if (isValid) {
        msg.style.display = 'none';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', `/acc`);
        xhr.setRequestHeader('Content-type', 'application/json'); ///
        xhr.send(JSON.stringify(info));
        xhr.onload = () => {
            alert(`User: ${info.username} login success.`);
            window.location.href = `/user`;
            const text = xhr.response;
            msgBox(text);
        };
    }
});
