import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const CRICKETER_SCHEMA = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    phone: Number
});

var Cricketer = mongoose.model('cricketers', CRICKETER_SCHEMA);

export default Cricketer;