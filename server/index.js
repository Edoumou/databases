const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose.connect(config.DB_URI);

const app = express();

app.get('/users', (req, res) => {
    res.json(
        {
            "name": "Gwlas",
            "success" : true 
        }
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Node Js Server is Running and listening on port: ${PORT}`);
});