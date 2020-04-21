const express = require('express');
const router = express.Router();

const annonceCtrl = require('../controllers/annonce');

router.get('/creerAnnonce', annonceCtrl.creerAnnoncePage);
router.post('/creerAnnonce', annonceCtrl.posterAnnonce);

router.get('/jeux', annonceCtrl.voirJeuxPage);
router.get('/jeux/:id', annonceCtrl.consulterAnnonce);

router.get('/nouveauJeu', annonceCtrl.pageInfoJeu);
router.post('/nouveauJeu', annonceCtrl.enregistrerJeuBD);

router.post('/rechercherJeu', annonceCtrl.rechercherJeu);

module.exports = router;