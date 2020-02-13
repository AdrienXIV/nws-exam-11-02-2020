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

 // récupérer tous les articles
router.get('/', function (req, res) {
    articleModel.find()
        .populate('user')
        .sort('name')
        .then(collection => {
            res.status(200).json(collection);
        })
        .catch(err => {
            console.error(error('catch : ' + err));
            res.status(500).json({
                erreur: err
            });
        });

});

// récupérer un article
router.get('/:id', function (req, res) {
    articleModel.findById(req.params.id)
        .then(model => {
            res.status(200).json(model);
        })
        .catch(err => {
            console.error(error('catch : ' + err));
            res.status(500).json({
                erreur: err
            });
        });
});



/**
 * POST
 */

 // ajouter un article
router.post('/add', function (req, res) {
    let article = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
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

 // modifier un article
router.patch('/:id', function (req, res) {
    let article = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    };

    articleModel.findById(req.params.id)
        .then(model => {
            return model.updateOne(article)
        })
        .then(model => {
            res.status(201).json(model);
        })
        .catch(err => {
            console.error(this.error('Article update catch : ' + err));
            res.status(500).json({
                erreur: err
            });
        });
});




/**
 * DELETE
 */

 // supprimer article
router.delete('/:id', function (req, res) {
    articleModel.findById(req.params.id)
        .then(model => {
            return model.remove();
        })
        .then(() => {
            res.status(200).send('ok');
        })
        .catch(err => {
            console.error(this.error('Article remove catch : ' + err));
            res.status(500).json({
                erreur: err
            });
        });
});


module.exports = router;