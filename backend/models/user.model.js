const mongoose = require('mongoose');
const moment = require('moment');
const type = mongoose.Schema.Types;


// Schéma
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'email invalide'],
        required: [true, 'email manquant']
    },
    password: {
        type: String,
        minlength: 5,
        required: [true, 'mot de passe manquant']
    },
    first_name: {
        type: String,
        required: [true, 'nom manquant']
    },
    last_name: {
        type: String,
        required: [true, 'prénom manquant']
    },
    admin: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        default: moment().format('LLL')
    },
    photo_profil: {
        type: String,
        default: null
    }
});

// Modèle
const userModel = mongoose.model('user', userSchema, 'user');

module.exports = userModel;