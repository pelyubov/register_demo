import { join, resolve } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { push, isHadThisUser } from './edit-data.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser());

app.get('/register', (req, res) => {
    res.sendFile(join(resolve() + '/public/index.htm'));
});

app.post('/addUser', (req, res) => {
    let user = req.body;
    let { isHad, msg } = isHadThisUser(user);
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
