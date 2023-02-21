const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
    }, 
    age: {
        type: String,
        required: [true, 'Age is required.'],
    },
    telephone: {
        type: String,
        required: [true, 'Phone number is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
    },
    city: {
        type: String,
        required: [true, 'City is required.'],
    },
    church: {
        type: String,
        required: [true, 'Church is required.'],
    },
    experienced: {
        type: Boolean,
        required: [true, 'Choir experience is required.'],
    },
    voiceType: {
        type: String,
        required: [true, 'Voice type is required.']
    }
});

const SignUp = mongoose.model('SignUps', signUpSchema);
module.exports = SignUp;