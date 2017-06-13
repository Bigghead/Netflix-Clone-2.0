const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userList : [], 
    userSettings: {
        newUserName: { type: String, default: '' },
        fullName: { type: String, default: '' }, 
        about: { type: String, default: '' }

    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;