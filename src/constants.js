const buttonType = {
    number: 0,
    operator: 1,
    special: 2,
    control: 3
};

const operation = {
    add: 0,
    remove: 1
}

const buttons = [
    {name :'1', type: buttonType.number},
    {name :'2', type: buttonType.number},
    {name :'3', type: buttonType.number},
    {name :'4', type: buttonType.number},
    {name :'5', type: buttonType.number},
    {name :'6', type: buttonType.number},
    {name :'7', type: buttonType.number},
    {name :'8', type: buttonType.number},
    {name :'9', type: buttonType.number},
    {name :'0', type: buttonType.number},
    {name :'.', type: buttonType.special},
    {name :'DEL', type: buttonType.control},
];

const operatorButtons = [
    {name:'+', type: buttonType.operator},
    {name:'-', type: buttonType.operator},
    {name:'*', type: buttonType.operator},
    {name:'/', type: buttonType.operator},
    {name:'=', type: buttonType.control},
];

export { buttonType, operation, buttons, operatorButtons };