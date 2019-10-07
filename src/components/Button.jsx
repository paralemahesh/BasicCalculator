import React from 'react';

const Button = (props) => {
    return(
        <div className={props.buttonClass}
        onClick={ ()=> {
                props.onClick(props.type, props.val)
            }}>
            <span>{props.val}</span>
        </div>
    )
};

export default Button;