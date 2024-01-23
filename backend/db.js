const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm")

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
})

const User =  mongoose.model("user",userSchema);
modeule.exports={
    User
}

//****ELEGENT SOLUTION */
// backend/db.js
// const mongoose = require('mongoose');

// // Create a Schema for Users
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         minLength: 3,
//         maxLength: 30
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// });

// // Create a model from the schema
// const User = mongoose.model('User', userSchema);

// module.exports = {
// 	User
// };