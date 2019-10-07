import React from 'react';
import Grid from '../components/Grid'
import Controls from '../components/Controls'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { calculatorStateReducer } from '../helpers/reducers.js';

export default class Caclulator extends React.Component{
    constructor(){
        super();
        this.state={
            isCalculatorOn : true
        };

        this.handleCloseCalculator = this.handleCloseCalculator.bind(this);
    }

    handleCloseCalculator(){
        this.setState({isCalculatorOn: false});
    }

    render(){
        if(this.state.isCalculatorOn){
            return (
                <div className={this.state.isCalculatorOn ? "calculator" : "calculator roll-out-blurred-left"}>
                    <Provider store={createStore(calculatorStateReducer)}>
                        <Controls closeCalculator={this.handleCloseCalculator}></Controls>
                        <Grid></Grid>
                    </Provider>
                </div>
            )
        }
        else{
            return <div>Agios amigo!</div>
        }
    }
}