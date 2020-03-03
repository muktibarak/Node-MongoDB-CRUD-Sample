const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SampleSchema = new Schema({
    id:{type: Number, required: true},
    name:{type: String, required: true, max: 100}
});

//export the model
module.exports = mongoose.model('Sample', SampleSchema);