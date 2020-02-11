const express = require('express');
const router = express.Router();

// Modèles
const userModel = require('../models/user.model');

// Class
const Crypto = require('../crypt/crypto');

const chalk = require('chalk');
// COULEURS CONSOLE
const connected = chalk.bold.hex('#0652DD'); // connexion réussi, bleu
const error = chalk.bold.yellow; // erreur lors de la connexion
const disconnected = chalk.bold.red; // déconnexion
const termination = chalk.bold.magenta; // application quittée

/**
 * GET
 */

router.get('/', function (req, res) {

});



/**
 * POST
 */
router.post('/login', function (req, res) {
    let crypt = new Crypto(); // class crypt pour encoder mdp

    userModel.findOne({
        email: req.body.email
    })
    .then(user => {
        if (user) {
            // user.password = mot de passe dans la bdd
            if (req.body.password == crypt.decrypt(user.password)) {
                req.session.regenerate;
                req.session.user = user;
                // succès de la requête
                res.status(200).json({
                    user, 
                    session : req.session
                });
            } else {
                // mauvaise requête
                res.status(400).json({
                    erreur: 'les mots de passe ne correspondent pas !'
                });
            }
        } else {
            // ressource inexistante
            res.status(404).json({
                erreur: "Utilisateur inexistant. Courriel invalide."
            });
        }
    }).catch(err => {
        console.error(this.error('connexionUtilisateur catch : ' + err));
        // compréhension de la requête mais refus de l'exécuter
        res.status(500).json({
            erreur: err
        });
    });
});

router.post('/new', function (req, res) {
    let crypt = new Crypto(); // class crypt pour encoder mdp

    let user = {
        email: req.body.email,
        password: crypt.crypt(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        photo_profil: req.body.photo_profil
    };

    userModel.create(user)
        .then(model => {
            res.status(201).json({
                user: model
            });
        })
        .catch(err => {
            console.error(error('User create catch : ' + err));
            res.status(500).json({
                erreur: err
            });
        });
});





/**
 * PATCH
 */





/**
 * DELETE
 */




module.exports = router;