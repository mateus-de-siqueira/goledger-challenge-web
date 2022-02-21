const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    writers: {
        type: Number,
        required: true,
    }
});

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;