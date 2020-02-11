const mongoose = require('mongoose');
const type = mongoose.Schema.Types;


// Schémas
const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'nom manquant']
    },
    description: String,
    image: String,
    user: {type: type.ObjectId, ref:'user'}
});

// Modèle
const articleModel = mongoose.model('article', articleSchema, 'article');

module.exports = articleModel;