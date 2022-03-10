const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});


module.exports = mongoose.model('User', userSchema);




