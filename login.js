import { readFileSync } from 'fs';
let pathData = './data/data.json';
const login = (userLogin) => {
    let users = JSON.parse(readFileSync(pathData));
    for (let user of users) {
        if (isEqual(user, userLogin)) {
            return true;
        }
    }
    return false;
};
const isEqual = (user1, user2) => {
    if (user1.username != user2.username) {
        return false;
    }
    if (user1.email != user2.email) {
        return false;
    }
    if (user1.password != user2.password) {
        return false;
    }
    return true;
};

export { login };
