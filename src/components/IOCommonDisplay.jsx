import React from 'react';
import Radium from 'radium';

class IOCommonDisplay extends React.Component{
    render(){
        return (
            <div className="ioCommonDisplay">
                <div style={[css.commonInput, css.ioCommonDisplayInput]}>{this.props.input}</div>
                <div style={[css.commonInput, css.ioCommonDisplayOutput]}>{this.props.output}</div>
            </div>
        );
    };
}

let css = {
    commonInput:{
        lineHeight: '50px',
        margin: '0px 15px',
        textAlign: 'right',
    },
    ioCommonDisplayInput: {
        fontSize: '25px'
    },
    ioCommonDisplayOutput: {
        fontSize: '30px',
        color: '#333333'
    }
};

export default Radium(IOCommonDisplay);