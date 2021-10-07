const express = require('express');

const EmployeeFileWriter = require('./src/EmployeeFileWriter').EmployeeFileWriter;

var employeeFileWriter = new EmployeeFileWriter();

var app = express();

app.use(express.json())  

app.get('/employee', (req, res) => {
     //Getting the data
     var employees = employeeFileWriter.getAllEmployees();
     // Transforming the data so it can be printed
     
    //  var employeesFormatted = "";
    //  employees.forEach(employee => {
    //   employeesFormatted += `${employee.firstName} ${employee.lastName}\n`
    //  })
     // Sending data back
     res.json(employees);
})

app.post('/employee', (req, res) => {
    employeeFileWriter.writeEmployee(req.body);
    res.send("You have used post");
})

app.listen(3000, () => {
  console.log("express is working and listening on port 3000");  
})

