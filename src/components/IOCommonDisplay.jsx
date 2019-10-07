import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

const styles = StyleSheet.create({
    commonDisplayComponent : {
        lineHeight: '50px',
        margin: '0px 15px',
        textAlign: 'right',
    },
    
    ioCommonDisplayInput : {
        fontSize: '25px'
    },
    
    ioCommonDisplayOutput: {
        fontSize: '30px',
        color: '#333333'
    }
});

const IOCommonDisplay = (props) => {
    console.log("Display Updated")
    return (
        <div className="ioCommonDisplay">
            <div className={css(styles.commonDisplayComponent, styles.ioCommonDisplayInput)}>{props.input}</div>
            <div className={css(styles.commonDisplayComponent, styles.ioCommonDisplayOutput)}>{props.output}</div>
        </div>
    );
}

export default IOCommonDisplay;