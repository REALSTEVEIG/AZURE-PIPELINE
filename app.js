const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    console.log('Home page!')
    res.send('Home page!');
})

app.get('/about', (req, res) => {
    console.log('About page!')
    res.send('About page!');
})

app.get('/contact', (req, res) => {
    console.log('Contact page!')
    res.send('Contact page!');
})

app.get('*', (req, res) => {
    console.log('404 page!')
    res.send('404 page!');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
})