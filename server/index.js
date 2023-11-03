const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Employee = require('./models/employee');
const FakeDb = require('./fake-db');

mongoose.connect(config.DB_URI)
    .then(() => {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
    });

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