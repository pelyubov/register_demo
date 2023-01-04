import { join, resolve } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { push, isHadThisUser } from './edit-data.js';
import { check } from './check.js';

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
    }

    let { isHad, msg } = isHadThisUser(user);
    console.log(msg);
    if (isHad == false) {
        push(user);
        res.json(`Welcome, ${user.username}`);
    } else {
        res.json(`${msg}`);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
