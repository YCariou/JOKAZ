const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const annonceRoutes = require('./routes/annonce.js');
const userRoutes = require('./routes/user.js');

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect("mongodb://localhost:27017/jokazDB", { useNewUrlParser: true, useUnifiedTopology: true});

const Jeu = require('./models/Jeu');

/////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use('/', annonceRoutes);
app.use('/', userRoutes);

app.get('/', (req,res)=>{
    res.render('home');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const taintedGrail = new Jeu({
//     titre : "Tainted Grail",
//     genre : "Fantasy",
//     nbJoueurMin : 1,
//     nbJoueurMax : 4,
//     age : 14,
//     dureeMin : 1,
//     dureeMax : 2,
//     description : "Chaque joueur contrôle un héros improbable qui va devoir affronter de terribles épreuves face auxquelles les champions les plus braves et les plus sages ont ployé le genou. Poursuivis par le pouvoir insidieux et corrompu du Wyrd, luttant contre l’épuisement de leurs ressources et confrontés à de terribles rencontres, les personnages devront accomplir l’impossible… et souvent mourir en chemin. Le système de statuts laisse les joueurs mesurer les conséquences de leurs actes sur le long terme tandis que le scénario aux multiples embranchements leur permet d’aborder les problèmes de plusieurs façons en assurant que chaque partie sera différente de la précédente."
// });

//taintedGrail.save();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3000,() => console.log("Server started on port 3000."));
