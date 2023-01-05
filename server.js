import { join, resolve } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { push, isHadThisUser } from './edit-data.js';
import { check } from './check.js';
import { login } from './login.js';

const app = express();
const port = 3000;

const filePath = (path) => join(resolve() + path);

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(filePath('/public/homepage.htm'));
});

app.get('/register', (req, res) => {
    res.sendFile(filePath('/public/register.htm'));
});

app.post('/addUser', (req, res) => {
    let user = req.body;
    let { isValid, msgCheck } = check(user);
    if (isValid == false) {
        res.json(msgCheck);
    } else {
        let { isHad, msg } = isHadThisUser(user);
        if (isHad == false) {
            push(user);
            res.json(`Welcome, ${user.username}`);
        } else {
            res.json(msg);
        }
    }
});

app.get('/login', (req, res) => {
    res.sendFile(filePath('/public/login.htm'));
});

app.post('/acc', (req, res, next) => {
    let user = req.body;
    let { isValid, msgCheck } = check(user);
    if (isValid == false) {
        res.json(msgCheck);
    } else {
        let isUser = login(user);
        if (isUser == true) {
            // next(),
            //     (req, res) => {
            //         res.sendFile(filePath('/public/user.htm'));
            //     };
            res.json('Login success');
        } else {
            res.json('Incorrect login information.');
        }
    }
});

app.get('/user', (req, res) => {
    res.sendFile(filePath('/public/user.htm'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
