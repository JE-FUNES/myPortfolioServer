const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server leido en appServer');
});

module.exports = app;