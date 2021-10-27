const hbs = require('hbs');
const express = require('express');
const path = require('path');

const app = express()

const publicDirectory = path.join(__dirname, '/public');
console.log(publicDirectory);

app.set('view engine', 'hbs');

const partialsPath = path.join(__dirname, './views/templates/partials');
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));

app.get('', (req,res) => {
    res.render('index', {
        title: "Homepage with Handlebars",
        name: "Steven"
    })
})

app.get('/about', (req,res) => {
   res.render('about', {
       title: "Just some info about me"
   })
})

app.get('/contacts', (req,res) => {
    res.render('contacts', {
        title: 'Contacts page'
    }); 
})

app.get('*', (req, res) => {
    res.render('notfound', {
        title: "The page was not found"
    });
});

app.listen(3000, () => {
    console.log(`the application is running on port ${3000}`)
})