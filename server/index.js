const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Employee = require('./models/employee');
const employeeRoutes = require('./routes/employees');
const FakeDb = require('./fake-db');


mongoose.connect(config.DB_URI)
    .then(async () => {
        const fakeDb = new FakeDb();

        await fakeDb.cleanDb();
        fakeDb.seedDb();
    });

const app = express();

app.use('/api/v1/employees/', employeeRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Node Js Server is Running and listening on port: ${PORT}`);
});