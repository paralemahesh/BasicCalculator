import { buttonType, operation } from '../constants.js';
import { operatorButtons } from '../constants'
import Stack from '../utils/collections/Stack.js';

const isThereAnOperatorInInput = (input) => {
    return input.stack.find(input => operatorButtons.find(operator => operator.name === input), this);
}

const evaluate = (value) => {
    try{
        // eslint-disable-next-line no-eval
        value = eval(value);
    }catch(e){
        value = false;
    }
    return value;
}


const getNextInputsState = (inputs, value, operationPassed) => {
    if(operationPassed === operation.add){
        inputs.push(value);
    }
    else{
        inputs.pop(value);
    }
    return inputs;
}

const calculatorStateReducer = (state = {input: new Stack(), output: null}, action) => {

    let nextInputsState = state.input;
    if(action.data === "DEL"){
        nextInputsState = getNextInputsState(state.input, action.data, operation.remove);
    }
    else if(action.data === undefined){

    }
    else if(action.type !== buttonType.control){
        nextInputsState = getNextInputsState(state.input, action.data, operation.add);
    }

    let input = state.input.printStack();
    let result = evaluate(input);
    if(!result || state.input.size() < 3 || !isThereAnOperatorInInput(state.input)){
        result = null;
    }
    if(action.data === '=' && !result){
        result = "Invalid input";
    }
    
    return {
        input: nextInputsState,
        output: result
    };
};

export { calculatorStateReducer };