const express = require('express');

const EmployeeFileWriter = require('./src/EmployeeFileWriter').EmployeeFileWriter;

var employeeFileWriter = new EmployeeFileWriter();

var app = express();

app.use(express.json())  

app.get('/employee', (req, res) => {
   
     res.send(`Test`);
})

app.post('/employee', (req, res) => {
    employeeFileWriter.writeFile(req.body);
    res.send("You have used post");
})

app.listen(3000, () => {
  console.log("express is working and listening on port 3000");  
})

