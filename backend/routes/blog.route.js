const express = require('express');
const router = express.Router();

// Modèles
const articleModel = require('../models/article.model');

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
    articleModel.find()
    .populate('user')
    .then(collection => {
        res.status(200).json({
            collection
        });
    })
    .catch(err => {
        console.error(this.error('catch : ' + err));
        res.status(500).json({
            erreur: err
        });
    });
});



/**
 * POST
 */


router.post('/add', function (req, res) {
    let article = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        user: req.session.user._id
    };

    articleModel.create(article)
        .then(model => {
            res.status(201).json({
                article: model
            });
        })
        .catch(err => {
            console.error(this.error('Article create catch : ' + err));
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