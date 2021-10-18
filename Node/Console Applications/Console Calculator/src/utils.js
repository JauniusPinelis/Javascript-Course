/// Processing function which parses, validates, calculates the expression
function processCalculation(args){
    var model = processInput(args);
    var results = calculate(model);
    
    return results;
}

function calculate(calculationModel){
    switch (calculationModel.operator){
        case '-': 
            return calculationModel.number1 - calculationModel.number2;
        case '+': 
            return calculationModel.number1 + calculationModel.number2;
        case '/': 
            return calculationModel.number1 / calculationModel.number2;
        case '*': 
            return calculationModel.number1 * calculationModel.number2;
        default:
            throw "Operator is not support";
    }     
}


// Transform the input into a model we can work with;
function processInput(args){
    // Processing input and validating it is very complex!!

        var number1 = args.number1;
        var number2 = args.number2;
        var operator = args.operator;
   
        return {
            number1,
            number2,
            operator
        }
    }

exports.processCalculation = processCalculation;