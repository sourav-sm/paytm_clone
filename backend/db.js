//normal solution
// const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/paytm")

// const userSchema=mongoose.Schema({
//     username:String,
//     password:String,
//     firstname:String,
//     lastname:String,
// })

// const User =  mongoose.model("user",userSchema);
// modeule.exports={
//     User
// }

//****ELEGENT SOLUTION */
// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("monogodb://localhost:27017/paytm")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,//reference to user model
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

// Create a model from the schema
const Account=mongoose.model('Account',accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account
};