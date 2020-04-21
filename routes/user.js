const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/connexion', userCtrl.connexionPage);
router.get('/creerCompte', userCtrl.creerComptePage);

module.exports = router;