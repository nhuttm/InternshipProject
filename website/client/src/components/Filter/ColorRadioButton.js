import React from 'react';

export default class ColorRadioButton extends React.Component{
    render(){
        return(
            <label className="color-container">
                <input type="radio" className="color-bttn" name="color" value={this.props.colorName}/>
                <span className={this.props.colorName + " checkmark"}></span>
            </label>
        )
    }
}