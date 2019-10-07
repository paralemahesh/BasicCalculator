
const buttonClicked = (buttonType, buttonValue) => {
    return {
        type: buttonType,
        data: buttonValue
    };
}

export { buttonClicked };