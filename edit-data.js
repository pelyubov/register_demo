import fs from 'fs';
const push = (obj) => {
    let pathData = './data/data.json';
    let data = fs.readFileSync(pathData);
    let users = JSON.parse(data);
    users.push(obj);
    users = JSON.stringify(users);
    fs.writeFile(pathData, users, (err) => {
        if (err) throw err;
    });
};

const isHadThisUser = (newUser) => {
    let pathData = './data/data.json';
    let data = fs.readFileSync(pathData);
    let users = JSON.parse(data);
    for (let item of users) {
        if (item.username == newUser.username) {
            return { isHad: true, msg: 'This name already exists' };
        }
        if (item.email == newUser.email) {
            return { isHad: true, msg: 'This email already registered' };
        }
    }
    return { isHad: false, msg: 'Register Success' };
};

export { push, isHadThisUser };
