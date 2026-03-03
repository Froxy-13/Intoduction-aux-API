//importer express
const express = require('express');

//Créer l'application express
const app = express();

//Définir le port d'écoute
const PORT = 3000;

//Données fictives en mémoire
const annonces = [
    {
        id: 1,
        titre: 'Cours particuliers Maths / Info - L1/L2',
        description: "Etudiant en Master , disponible soirs et weekends",
        prix: 5000,
        Catégorie: "Cours",
        Vendeur: "Cherif Diouf",
        Ville: "Dakar"
    },
    {
        id: 2,
        titre: "Vente de vélo - Campus",
        description: "Vélo en bon état à vendre, idéal pour les déplacements sur le campus.",
        prix: 20000,
        Catégorie: "Vélo",
        Vendeur: "Aissatou Fall",
        Ville: "Dakar"
    },
    {
        id: 3,
        titre: "Sac à dos - quasi neuf",
        description: "Sac à dos en excellent état, presque neuf, idéal pour les étudiants.",
        prix: 9000,
        Catégorie: "Accessoires",
        Vendeur: "Alpha Diallo",
        Ville: "Dakar"
    },
    {
        id: 4,
        titre: "Livre de programmation - C",
        description: "Livre de programmation en langage C, parfait pour les débutants.",
        prix: 3000,
        Catégorie: "Livres",
        Vendeur: "Moussa Ndiaye",
        Ville: "Dakar"
    },
    {
        id: 5,
        titre: "Cartes UNO",
        description: "Paquet de cartes UNO complet, en excellent état.",
        prix: 2500,
        Catégorie: "Jeux",
        Vendeur: "Fatou Sow",
        Ville: "Dakar"
    },
    {
        id: 6,
        titre: "Stylo 4 couleurs",
        description: "Stylo 4 couleurs en bon état, idéal pour les étudiants.",
        prix: 1000,
        Catégorie: "Accessoires",
        Vendeur: "Aissatou Fall",
        Ville: "Dakar"
    }
];

//Route d'accueil
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenue sur Dakar Annonces !',
        date_heure: new Date().toLocaleString('fr-FR'),
        total_annonces: annonces.length,
        routes_disponibles: [
            'GET /api/info',
            'GET /api/annonces'
        ]
    });
});

//Route d'infomations (JSON)
app.get('/api/info', (req, res) => {
    res.json({
        name: 'DakarAnnonces API',
        version: '1.0.0',
        description: 'API de petites annonces du campus UCAD ',
        auteur: 'Alpha Diallo',
        total_annonces: annonces.length
    });
});

//Route pour lister les annonces
app.get('/api/annonces', (req, res) => {
    res.json({
        total : annonces.length,
        annonces: annonces
    });
});

//Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log('Appuyez sur Ctrl+C pour arrêter le serveur.');
});