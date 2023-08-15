const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    console.log('Home page!')
    res.status(200).send('Home page!');
})

app.get('/about', (req, res) => {
    console.log('About page!')
    res.status(200).send('About page!');
})

app.get('/contact', (req, res) => {
    console.log('Contact page!')
    res.status(200).send('Contact page!');
})

app.get('*', (req, res) => {
    console.log('404 page!')
    res.status(404).send('404 page!');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
})