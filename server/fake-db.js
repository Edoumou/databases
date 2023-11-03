const Employee = require('./models/employee');

class FakeDb {
    constructor() {
        this.employees = [
            {
                name: "Sam",
                age: 30,
                salary: 70000,
                designation: "Scientist"
            },
            {
                name: "Gwlas",
                age: 22,
                salary: 50000,
                designation: "Dev"
            },
            {
                name: "Edoum",
                age: 30,
                salary: 100000,
                designation: "CEO"
            }
        ]
    }

    pushEmployeesToDb() {
        this.employees.forEach(employee => {
            const newEmployee = new Employee(employee);

            newEmployee.save();
        });
    }

    seedDb() {
        this.cleanDb();
        this.pushEmployeesToDb();
    }

    async cleanDb() {
        await Employee.remove({});
    }
}

module.exports = FakeDb;