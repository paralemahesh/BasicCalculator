import React from 'react';

export default class IOCommonDisplay extends React.Component{
    render(){
        return (
            <div className="ioCommonDisplay">
                <div className="ioCommonDisplayInput">{this.props.input}</div>
                <div className="ioCommonDisplayOutput">{this.props.output}</div>
            </div>
        );
    };
}