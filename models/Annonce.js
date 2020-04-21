const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
    titre : {type : String, required: true},
    prix : {type : Number, required: true},
    langue : {type : String, required: true},
    etat : {type : String, required: true},
    precision : {type : String},
});

module.exports = mongoose.model('Annonce', annonceSchema);