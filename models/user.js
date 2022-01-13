import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const USER = new Schema({
    name: String,
    email: String,
    pwd: String,
    loc: String,
    age: Number,
    sex: String,
    lang: Array
});

var userValue = mongoose.model("user", USER);

export default userValue;