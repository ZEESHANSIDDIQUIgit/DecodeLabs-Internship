const express = require("express");

const app = express();

app.use(express.json());

const employees = [
    { id: 1, name: "Ali", salary: 50000 },
    { id: 2, name: "Ahmed", salary: 60000 }
];

// GET all employees
app.get("/api/employees", (req, res) => {
    res.json(employees);
});

// GET one employee
app.get("/api/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
});

// POST new employee
app.post("/api/employees", (req, res) => {
    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        salary: req.body.salary
    };

    employees.push(newEmployee);

    res.status(201).json(newEmployee);
});

// PUT update employee
app.put("/api/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employee.name = req.body.name;
    employee.salary = req.body.salary;

    res.json(employee);
});

// DELETE employee
app.delete("/api/employees/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employees.splice(index, 1);

    res.json({
        message: "Employee deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});