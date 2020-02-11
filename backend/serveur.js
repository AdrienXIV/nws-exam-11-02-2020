const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const chalk = require('chalk');

const PORT = process.env.PORT || 8080;

// COULEURS CONSOLE
const connected = chalk.bold.hex('#0652DD'); // connexion réussi, bleu
const error = chalk.bold.yellow; // erreur lors de la connexion
const disconnected = chalk.bold.red; // déconnexion
const termination = chalk.bold.magenta; // application quittée

const app = express();

// Midleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express('public'));


const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

// initialisation de la session
app.use(session({
    name: 'session',
    secret: ['key1', 'key2'],
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true, // false = pas de 'set cookie' dans le header
        path: '/',
        expires: expiryDate
    }
}));


// #######################
// BASE DE DONNEES
// #######################

const DB_URI = 'mongodb://localhost/blog'

const mongoose = require('mongoose');
const DB_OPTIONS = {
    socketTimeoutMS: 0,
    keepAlive: true,
    //reconnectTries: 30,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// désactivation du buffercommand pour éviter que Mongoose lève une erreur quand un modèle est crée sans connexion
mongoose.set('bufferCommands', false);

// db connexion
mongoose.connect(DB_URI, DB_OPTIONS);

mongoose.connection.on('connected', function () {
    console.log(connected("La connexion par défaut Mongoose est ouverte à ", DB_URI));
});

mongoose.connection.on('error', function (err) {
    console.log(error("Erreur lors de la connexion par défaut Mongoose : " + err));
});

mongoose.connection.on('disconnected', function () {
    console.log(disconnected("La connexion par défaut Mongoose est déconnectée."));
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log(termination("La connexion par défaut de Mongoose est déconnectée en raison de la fin de l'application."));
        process.exit(0);
    });
});

// #######################
// #######################


// lancement du serveur
app.listen(PORT, function (err) {
    if (err) console.error(error("erreur : " + err));
    else
        console.log(connected('Serveur lancé sur le port ' + PORT));
});


app.get('/', function (req, res, err) {
    res.setHeader('Content-Type', 'application/json')
    res.json(req.session)
});


/**
 * Routes
 */
const blog = require('./routes/blog.route');
const user = require('./routes/user.route');
const admin = require('./routes/admin/admin.route');

app.use('/blog', blog);
app.use('/user', user);
app.use('/admin', admin);