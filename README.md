
Ce projet est une **application web fullstack (React + Express)** simple et fonctionnelle, qui permet à un utilisateur de créer un compte via un formulaire d’inscription.

🚀 Fonctionnalité principale
----------------------------

Un formulaire **stylisé avec styled-components** permet à un utilisateur de :

- Choisir un type de compte : `Merchant` ou `Agent`
- Remplir les champs adaptés (ex : le champ "Company Name" n’apparaît que pour "Merchant")
- Valider les données avec **Formik + Yup**
- Envoyer les données au **serveur backend (Express)**
- Voir les données envoyées s’afficher dans une boîte JSON et dans la console développeur

📁 Architecture du projet
-------------------------

business-App-Reno/
├── backend/              ← Serveur Express
│   └── server.js
├── frontend/             ← Application React
│   ├── src/
│   │   ├── components/   ← Tous les composants React
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
└── README.txt

⚙️ Technologies utilisées
-------------------------

### Frontend

- React
- Formik – gestion du formulaire
- Yup – validation de données
- Fetch API – envoi des données vers l’API
- Styled-components – stylisation CSS dans JS


### Backend

- Express – serveur Node.js
- body-parser
- CORS

🧠 Logique du formulaire
------------------------

1. L'utilisateur choisit un type de compte (via des boutons toggle).
2. En fonction du type (`merchant` ou `agent`), le champ "Company Name" s’affiche ou non.
3. Formik gère l’état du formulaire et sa soumission.
4. Yup valide les champs avant envoi.
5. À la soumission :
   - Les données sont envoyées au serveur (`POST /api/register`)
   - Le serveur les loggue dans la console et renvoie une réponse de succès.
6. Le front affiche les données dans une boîte JSON + dans la console du navigateur.

▶️ Comment lancer le projet
---------------------------

### 1. Installer le back-end

cd backend  
npm install  
node server.js

Le serveur tourne sur http://localhost:3001

### 2. Installer le front-end

cd frontend  
npm install  
npm start

L'application tourne sur http://localhost:3000


