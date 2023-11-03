const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

router.get('', (req, res) => {
    Employee.find({}).then(
        foundEmployees => res.json(foundEmployees)
    );
});

router.get('/:id', (req, res) => {
    const employeeId = req.params.id;

    Employee.findById(employeeId).then(foundEmployee => {
            if(foundEmployee === null) {
                res.status(422).send(
                    { 
                        errors: [{title: 'Employee Error!', detail: 'Could not find Employee!' }]
                    }
                );
            }
            
            res.json(foundEmployee);
        }
    );
});

module.exports = router;