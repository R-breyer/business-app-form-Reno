// Importation des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Création de l'application Express
const app = express();
const port = 3001; // Port sur lequel le serveur backend va écouter

// Middleware pour parser les requêtes au format JSON
app.use(bodyParser.json());

// Middleware pour gérer les problèmes de CORS (Cross-Origin Resource Sharing)
// Permet aux requêtes provenant d'autres domaines (comme ton frontend sur localhost:3000) d'accéder à ce serveur
app.use(cors());

// Définition de la route POST pour l'enregistrement des utilisateurs
app.post('/api/register', (req, res) => {
    // Récupération des données envoyées par le frontend dans le corps de la requête
    const userData = req.body;

    // Affichage des données reçues dans la console du serveur (pour la démonstration)
    console.log('Données d\'enregistrement reçues :', userData);

    // Simulation d'une réponse réussie du serveur
    res.status(200).json({ message: 'Inscription reçue par le serveur !', data: userData });
});

// Démarrage du serveur et écoute sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur backend démarré sur le port ${port}`);
});