const fs = require('fs');
const path = require('path');

class EmployeeFileWriter {

    static indexCounter = 1;

    constructor(){

    }

    getAllEmployees(){
        var dataDirectory = path.join(__dirname, '../')
        var fileDirectory = path.join(dataDirectory, '/data/employees.txt')

        // var lineReader = require('readline').createInterface({
        //     input: require('fs').createReadStream(fileDirectory)
        // });

        var employees = []
          
        //   lineReader.on('line', function (line) {
        //     var lineData = line.split(' ');
        //     var employee = {
        //         firstName: lineData[1],
        //         lastName: lineData[2]
        //     };
        //     //console.log('Line from file:', line);
        //     employees.push(employee);
        //   });

        var fileData = await fs.readFile(fileDirectory);
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