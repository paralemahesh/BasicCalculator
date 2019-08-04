import React from 'react';
import css from '../css/modules/ioCommonDisplay.module.css';

export default class IOCommonDisplay extends React.Component{
    render(){
        return (
            <div className="ioCommonDisplay">
                <div className={css.ioCommonDisplayInput}>{this.props.input}</div>
                <div className={css.ioCommonDisplayOutput}>{this.props.output}</div>
            </div>
        );
    };
}