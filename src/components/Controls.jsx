import React from 'react'
import controlsCss from '../css/modules/controlsBar.module.css'

export default class Controls extends React.Component{
    render(){
        return (
            <div className={controlsCss.controlsBar}>
                <div className={controlsCss.titleWrapper}>
                    <div className={controlsCss.title}>Calculator</div>
                </div>
                <div className={controlsCss.controls}>
                    <div className={controlsCss.control} onClick={() => this.props.closeCalculator()}>
                        X
                    </div>
                </div>
            </div>
        )
    }
}