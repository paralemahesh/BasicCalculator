import React from 'react';

export default class Button extends React.Component {
    
    render(){
        return(
            <div className={this.props.buttonClass}
                onClick={()=>this.props.clickActionHandler(this.props.val, this.props.type)}>
                <span>{this.props.val}</span>
            </div>
        )
    }
}