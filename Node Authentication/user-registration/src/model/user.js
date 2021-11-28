const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    first_name: {type: String, default: null},
    last_name: {type: String, default: null},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    token: {type: String }
})

userSchema.methods.toJSON = function() {
    const user = this.toObject();
    user.id = user._id;

    delete user._id;
    delete user.password;
    delete user.__v;
    
    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;