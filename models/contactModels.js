const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    name: { type: String, required: [true ,'Please add the contact name']},
    email: { type: String, required: [true ,'Please add the contact email']},
    phone: { type: String, required: [true ,'Please add the contact mobile no']},

},{ Timestamp:true})


module.exports=mongoose.model('contact',contactSchema)