const mongoose = require('mongoose');

const jeuSchema = new mongoose.Schema({
    titre : {type : String},
    genre : {type : String},
    nbJoueurMin : {type : Number},
    nbJoueurMax : {type : Number},
    age : {type : Number},
    dureeMin : {type : Number},
    dureeMax : {type : Number},
    description : {type : String},
    image: {type: String}
});

module.exports = mongoose.model('Jeu', jeuSchema);