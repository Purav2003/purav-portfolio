const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

var userSchema = new mongoose.Schema({
    mac:{
        type:String
    },
    userAgent: {
        type: String,
    },
    additionalDetails: {
        type: Object
    },   
}, { timestamps: true });

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);