import React from 'react';
import Button from '../components/Button.jsx';
import buttonCss from '../css/modules/button.module.css'
import rippleCss from '../css/modules/effects/rippleEffect.module.css';
import {connect} from 'react-redux';
import { buttonClicked } from '../helpers/dispatchActions.js'
import { buttons, operatorButtons } from '../constants.js';

let GridButtons = ({dispatch}) => {

    const onClick = (buttonType, value) => {
        return (
            dispatch(buttonClicked(buttonType, value))
        );
    }

    const buttonSets = buttons.map(
        item => <Button buttonClass={`${buttonCss.button} ${buttonCss.buttonNumber} ${rippleCss.buttonNumber}`}
                key={item.name}
                val={item.name}
                type={item.type}
                onClick={onClick}
            ></Button>
    );

    const operatorButtonSet = operatorButtons.map(
        item => <Button buttonClass={`${buttonCss.button} ${buttonCss.buttonOperator} ${rippleCss.buttonOperator}`}
                    key={item.name}
                    val={item.name}
                    type={item.type}
                    onClick={onClick}
                ></Button>
        );

    return (
        <React.Fragment>
            <div className="numbers">
                { buttonSets }
            </div>
            <div className="operators">
                { operatorButtonSet }
            </div>
        </React.Fragment>
    );
}

GridButtons = connect()(GridButtons);

export default GridButtons;