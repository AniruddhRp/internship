const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    
    },
    phone: {
        type: String,
    
    },
});


module.exports = mongoose.model("Contact",contactSchema);