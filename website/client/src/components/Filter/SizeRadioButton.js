import React from 'react';

export default class SizeRadioButton extends React.Component{
    render(){
        return(
            <label className="size-container" style={{paddingLeft: 30}}>
                <input type="radio" className="color-bttn" name="size" value={this.props.size}/>
                <span className="checkmark">{this.props.size}</span>
            </label>
        )
    }
}