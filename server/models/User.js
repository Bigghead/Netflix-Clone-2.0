const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userList : [], 
    userSettings: {
        username: String, 
        fullName: String, 
        about: String

    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;