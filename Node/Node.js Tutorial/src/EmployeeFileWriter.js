const fs = require('fs');

class EmployeeFileWriter {

    constructor(){

    }

    writeFile(employee){
        var employInfo = `${employee.firstName} ${employee.lastName}`;
        fs.writeFile(__dirname + "/data/employees.txt", employInfo, error => {
            if (error){
                console.log(error);
            }
        })
    }

    getDataFromFile(){

    }
}

exports.EmployeeFileWriter = EmployeeFileWriter;