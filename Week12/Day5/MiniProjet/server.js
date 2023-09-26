const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let listeDeCours = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
    const article = req.body.article;
    const montant = req.body.montant;

    listeDeCours.push({ article, montant });

    res.redirect('/cours');
});

app.get('/cours', (req, res) => {
    let coursesHTML = '<h1>Liste de Cours</h1><ul>';
    for (let course of listeDeCours) {
        coursesHTML += `<li>${course.article} : ${course.montant} €</li>`;
    }
    coursesHTML += '</ul>';
    res.send(coursesHTML);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});