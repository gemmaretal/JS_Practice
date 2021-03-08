//the input cant be changed
const defaultResult = 0;
// the input can be changed
let currentResult = defaultResult;
let logEntries = [];    

//function to get input from input field
function getUserNumberInput(){
    //parsing data to integer
    return parseInt (userInput.value)
}


//function to generate and write calculation log/output
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription =` ${resultBeforeCalc} ${operator} ${calcNumber}`;//output formula
    outputResult (currentResult, calcDescription)
}

//fucntion to write log in console (refactoring e.g)
function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
    ){
        //object
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult 
        };
        //push = push into elemment to array
        logEntries.push(logEntry);
        //display data to console
       // console.log(logEntry.operation);//access data from object
        console.log(logEntries);
    }

//function (will be saved in memory and waiting to be calling)
function add(){
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    //automatictly converted to string
    //const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber; 
    createAndWriteOutput('+', inititalResult, enteredNumber);
    writeToLog('ADD', inititalResult, enteredNumber, currentResult);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', inititalResult, enteredNumber);
    writeToLog('SUBTRACT', inititalResult, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput('*', inititalResult, enteredNumber);
    writeToLog('MULTIPLY', inititalResult, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const inititalResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', inititalResult, enteredNumber);
    writeToLog('DIVIDE', inititalResult, enteredNumber, currentResult);
}

//value can be anything but doesnt same with in the function, but it has static input/param
//currentResult = add(1,2);

//currentResult = currentResult + 10 * 3 - 10 * 2;
//let calculationDescription = '(' + defaultResult + '+ 10 * 3 - 10 * 2)';

//alternate (to tell the output value of the variable in the bracket)
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;

//increment/decrement
//++param > before, param++ > after
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

