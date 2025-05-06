// Importation des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Création de l'application Express
const app = express();
const port = 3001; // Port sur lequel le serveur backend va écouter

// Middleware pour parser les requêtes au format JSON
app.use(bodyParser.json());

// Middleware pour gérer les problèmes de CORS
app.use(cors());

// Définition de la route POST pour l'enregistrement des utilisateurs
app.post('/api/register', (req, res) => {
    const userData = req.body;

    console.log("Données d'enregistrement reçues :", userData);

    // Chemin du fichier de sauvegarde JSON
    const filePath = path.join(__dirname, 'inscriptions.json');

    // Lire les données existantes
    let existingData = [];
    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath);
        try {
            existingData = JSON.parse(rawData);
        } catch (err) {
            console.error('Erreur de lecture du fichier JSON :', err);
            existingData = [];
        }
    }

    // Ajouter les nouvelles données
    existingData.push(userData);

    // Écrire les données mises à jour dans le fichier
    try {
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
        res.status(200).json({ message: 'Inscription enregistrée et sauvegardée !', data: userData });
    } catch (err) {
        console.error('Erreur lors de l\'écriture du fichier :', err);
        res.status(500).json({ message: 'Erreur lors de la sauvegarde des données.' });
    }
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur backend démarré sur le port ${port}`);
});
