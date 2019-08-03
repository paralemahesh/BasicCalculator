import React from 'react';
import Button from './Button.jsx';
import IOCommonDisplayComponent from './IOCommonDisplay';
import Stack from '../utils/collections/Stack.js'

export default class Grid extends React.Component{
    constructor(){
        super();

        this.state ={
            input: new Stack(),
            output: null,
        }

        this.operation = {
            add: 0,
            remove: 1
        }

        this.manageInput = this.manageInput.bind(this);
        this.isThereAnOperatorInInput = this.isThereAnOperatorInInput.bind(this);

        this.buttonType = {
            number: 0,
            operator: 1,
            special: 2
        }

        this.buttons = [
            {name :'1', type: this.buttonType.number},
            {name :'2', type: this.buttonType.number},
            {name :'3', type: this.buttonType.number},
            {name :'4', type: this.buttonType.number},
            {name :'5', type: this.buttonType.number},
            {name :'6', type: this.buttonType.number},
            {name :'7', type: this.buttonType.number},
            {name :'8', type: this.buttonType.number},
            {name :'9', type: this.buttonType.number},
            {name :'0', type: this.buttonType.number},
            {name :'.', type: this.buttonType.special},
            {name :'DEL', type: this.buttonType.control},
        ]
        this.operatorButtons = [
            {name:'+', type: this.buttonType.operator},
            {name:'-', type: this.buttonType.operator},
            {name:'*', type: this.buttonType.operator},
            {name:'/', type: this.buttonType.operator},
            {name:'=', type: this.buttonType.control},
        ]

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    isThereAnOperatorInInput(){
        return this.state.input.stack.find(input => this.operatorButtons.find(operator => operator.name === input), this);
    }

    manageInput(value, operation){
        let inputs = this.state.input;
        if(operation === this.operation.add){
            inputs.push(value);
            this.setState({input: inputs});
        }
        else{
            inputs.pop(value);
            this.setState({input: inputs});
        }
    }

    evaluate(value){
        try{
            // eslint-disable-next-line no-eval
            value = eval(value);
        }catch(e){
            value = false;
        }
        return value;
    }

    buttonClickHandler(value, type){
        let currentInput = type === this.buttonType.control ? '' : value;
        if(value === "DEL"){
            this.manageInput(currentInput, this.operation.remove);
        }
        else if(currentInput !== ''){
            this.manageInput(currentInput, this.operation.add);
        }
        
        let input = this.state.input.printStack();
        let result = this.evaluate(input);
        if(result !== false && this.state.input.size() > 2 && this.isThereAnOperatorInInput()){
            this.setState({output: result});
        }
        else{
            this.setState({output: null});
        }

        if(value === '=' && result === false){
            this.setState({output: "Invalid input"});
        }
    }

    render(){
        return (
            <div className="calcularGrid">
                <div className="displayHolder" key={0}>
                    <IOCommonDisplayComponent
                        input={this.state.input.printStack()}
                        output={this.state.output}
                    ></IOCommonDisplayComponent>
                </div>

                <div className="numbers" key={1}>
                    {
                        this.buttons.map(
                            item => <Button buttonClass="button buttonNumber ripple" key={item.name}
                                            val={item.name}
                                            type={item.type}
                                            clickActionHandler={this.buttonClickHandler}
                                        ></Button>
                        )
                    }
                </div>
                <div className="operators">
                    {
                        this.operatorButtons.map(
                            item => <Button buttonClass="button buttonOperator ripple" key={item.name}
                                            val={item.name}
                                            type={item.type}
                                            clickActionHandler={this.buttonClickHandler}
                                        ></Button>
                        )
                    }
                </div>
            </div>
        );
    }
}