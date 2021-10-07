const fs = require('fs');
const path = require('path');

class EmployeeFileWriter {

    static indexCounter = 1;

    constructor(){

    }

    getAllEmployees(){
        var dataDirectory = path.join(__dirname, '../')
        var fileDirectory = path.join(dataDirectory, '/data/employees.txt')

        var employees = [];
          
        var fileData = fs.readFileSync(fileDirectory, 'utf8');

        var lines = fileData.split('\n');

        lines.forEach((line) => {
            var lineElements = line.split(' ');

            var employeeObject = {
                id : lineElements[0],
                firstName: lineElements[1],
                lastName: lineElements[2]
            };

            employees.push(employeeObject);
        })
        return employees;
    }

    writeEmployee(employee){
        var employInfo = `${EmployeeFileWriter.indexCounter} ${employee.firstName} ${employee.lastName}\n`;
        var dataDirectory = path.join(__dirname, '../')
        fs.appendFile(dataDirectory + "/data/employees.txt", employInfo, error => {
            if (error){
                console.log(error);
            }
        })
        this.getEmployees();
        EmployeeFileWriter.indexCounter++;
    }

   
}

exports.EmployeeFileWriter = EmployeeFileWriter;