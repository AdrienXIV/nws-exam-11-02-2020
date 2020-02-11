const express = require('express');
const router = express.Router();

// Modèles
const userModel = require('../../models/user.model');

// Class
const Crypto = require('../../crypt/crypto');

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
router.post('/new', function (req, res) {
    let crypt = new Crypto(); // class crypt pour encoder mdp

    let admin = {
        email: req.body.email,
        password: crypt.crypt(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        admin: true,
        photo_profil: req.body.photo_profil
    };

    userModel.create(admin)
        .then(model => {
            res.status(201).json({
                user: model
            });
        })
        .catch(err => {
            console.error(this.error('User create catch : ' + err));
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