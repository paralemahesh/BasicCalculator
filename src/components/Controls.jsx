import React from 'react'
import controlsCss from '../css/modules/controlsBar.module.css'

const Controls = (props) => {
    return (
        <div className={controlsCss.controlsBar}>
            <div className={controlsCss.titleWrapper}>
                <div className={controlsCss.title}>Calculator</div>
            </div>
            <div className={controlsCss.controls}>
                <div className={controlsCss.control} onClick={() => props.closeCalculator()}>
                    X
                </div>
            </div>
        </div>
    )
};

export default Controls;