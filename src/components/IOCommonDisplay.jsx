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


/* A react standard type variable is required that itself stores all react styled-css styles in it.
 * This css is re-written inline by Radium! - This explodes the HTML rendered in the browser.
 * Even media-queries are not supported in some browsers when processed by Radium.
 */
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