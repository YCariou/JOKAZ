const Annonce = require('../models/Annonce');
const Jeu = require('../models/Jeu');
const bodyParser = require('body-parser');
const _ = require('lodash');

exports.creerAnnoncePage = (req, res) => {
    res.render("creerAnnonce");
};

exports.posterAnnonce = (req, res) => {

    const annonce = new Annonce({
        titre : req.body.titre,
        prix : req.body.prix,
        langue : req.body.langue,
        etat : req.body.etat,
        precision : req.body.precision
    });

    annonce.save();

    Jeu.findOne({titre : req.body.titre}, function(err,jeuTrouve){
        if(!jeuTrouve) {
            res.render('enregistrerJeuBD', {titreJeu : req.body.titre});
        } else {
            res.redirect("/");
        }
    });
    
};

exports.voirJeuxPage = (req,res) => {

    Annonce.find({},[],{ sort: { '_id': -1 } }, function(err, foundAnnonces){    
        res.render("jeux", {foundAnnonces});
    }).limit(4)

};

exports.consulterAnnonce = (req,res) => {

    Annonce.findOne({_id:req.params.id}, function(err,consulterJeu){

        Jeu.findOne({titre : consulterJeu.titre}, function(err, infoJeu){
            if (!err) {
                res.render("consulterAnnonce",{consulterJeu, infoJeu});
            } else {
                res.render("consulterAnnonce",{consulterJeu});
            }
        });  
        
    });
    
};

exports.pageInfoJeu = (req,res) => {
    res.render('enregistrerJeuBD');
};

exports.enregistrerJeuBD = (req,res) => {

    const jeu = new Jeu({
        titre : req.body.titre,
        genre : req.body.genre,
        nbJoueurMin : req.body.nbJoueurMin,
        nbJoueurMax : req.body.nbJoueurMax,
        age : req.body.age,
        dureeMin : req.body.dureeMin,
        dureeMax : req.body.dureeMax,
        description : req.body.description,
        image : req.body.image
        });

    jeu.save();

    res.redirect('/');
    

};

exports.rechercherJeu = (req, res) => {

    const capitalizeTitle = _.capitalize(req.body.rechercher);

    Annonce.find({titre: capitalizeTitle}, function(err,foundAnnonces){
        const nbResultat = foundAnnonces.length;
        
        if (foundAnnonces){
            res.render('rechercherJeu', {foundAnnonces, nbResultat});             
        }
    });
};