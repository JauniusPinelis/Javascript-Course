import {uid} from "./CalculationHelpers.js";

class Person {
    constructor(firstName, lastName){
        this.id = uid();
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Employee extends Person {
    constructor(firstName, lastName){
        super(firstName, lastName)
    }

    setHourlyRate(rate){
        this.rate = rate;
    }

    getHourlyRate(){
        if (this.rate == null){
            return 5;
        }
        return this.rate;
    }

    updateValues(propertyName, value){
        if (propertyName == "hourly-rate"){
            this.setHourlyRate(value);
        }
        if (propertyName == "working-hours"){
            this.setWorkingHours(value);
        }
    }

    // Hours per week
    setWorkingHours(hours){
        this.workingHours = hours;
    }

    getWorkingHours(){
        if (this.workingHours == null){
            return 40;
        }
        return this.workingHours;
    }

    /// Returns a salary per month
    getSalary(){
        return this.getWorkingHours() * 4 * this.getHourlyRate();
    }
}

