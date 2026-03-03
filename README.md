# DakarAnnonces API

## Description

API REST de petites annonces pour le campus de l'Université Cheikh Anta Diop (UCAD), développée dans le cadre du cours **Web Services & APIs** avec Node.js et Express.

**Auteur :**  **Alpha Diallo** 
**Version :** 1.0.0  
**Contexte académique :** Lab 1 - Environnement & Premier Serveur

---

## Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm** (gestionnaire de paquets Node.js)
- **Postman** (pour tester l'API)

---

## Installation

1. **Cloner ou télécharger le projet**
   ```bash
   cd dakar-annonces
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

---

## Lancement du serveur

### Mode développement (avec rechargement automatique)
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur démarre sur **http://localhost:3000**

---

## Routes disponibles

### `GET /`
Retourne un message de bienvenue et la liste des routes disponibles.

**Réponse :**
```json
{
  "message": "Bienvenue sur Dakar Annonces !",
  "routes_disponibles": [
    "GET /api/info",
    "GET /api/annonces"
  ]
}
```

---

### `GET /api/info`
Retourne les informations sur l'API.

**Réponse :**
```json
{
  "name": "DakarAnnonces API",
  "version": "1.0.0",
  "description": "API de petites annonces du campus UCAD",
  "auteur": "Alpha Diallo",
  "total_annonces": 3
}
```

---

### `GET /api/annonces`
Retourne la liste complète des annonces disponibles.

**Réponse :**
```json
{
  "total": 3,
  "annonces": [
    {
      "id": 1,
      "titre": "Cours particuliers Maths / Info - L1/L2",
      "description": "Etudiant en Master, disponible soirs et weekends",
      "prix": 5000,
      "Catégorie": "Cours",
      "Vendeur": "Cherif Diouf",
      "Ville": "Dakar"
    },
    ...
  ]
}
```

---

## Structure du projet

```
dakar-annonces/
├── node_modules/       # Dépendances (généré automatiquement)
├── index.js            # Point d'entrée de l'application
├── package.json        # Configuration du projet
├── package-lock.json   # Versions exactes des dépendances
└── README.md           # Documentation
```

---

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur
- **Express.js** : Framework web minimaliste pour Node.js
- **nodemon** : Outil de développement pour le rechargement automatique

---

## Tests avec Postman

1. Assurez-vous que le serveur est démarré (`npm run dev`)
2. Ouvrez Postman
3. Testez les trois routes :
   - `GET http://localhost:3000/`
   - `GET http://localhost:3000/api/info`
   - `GET http://localhost:3000/api/annonces`

---

## Notes

- Les données sont actuellement stockées en mémoire (tableau JavaScript)
- Cette implémentation correspond au **Lab 1** du cours
- Les labs suivants introduiront une base de données persistante

---

## Licence

ISC

---
**Ecole Supérieure de Technologie et de Management (ESTM) - 2025-2026**
