const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const newUser = new Schema({
    email: {
        type: String,
    },
    password: String,
    role: {
        type: String,
        default: 'employee'
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

module.exports = Users = mongoos.model('User', newUser);