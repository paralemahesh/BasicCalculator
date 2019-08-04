import React from 'react';
import Grid from '../components/Grid'
import Controls from '../components/Controls'

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
                    <Controls closeCalculator={this.handleCloseCalculator}></Controls>
                    <Grid></Grid>
                </div>
            )
        }
        else{
            return <div>Hope I got it right ;)</div>
        }
    }
}