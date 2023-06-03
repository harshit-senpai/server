const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    password: String
})

const usermodel = mongoose.model('users', userSchema);
module.exports = usermodel;