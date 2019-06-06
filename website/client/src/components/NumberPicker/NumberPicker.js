import React from 'react';
import './NumberPicker.scss';
import Button from '../Button/Button';

export default class NumberPicker extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Button className="minus-bttn" onButtonClick={this.props.minusQuantity}></Button>
                <input type="text" readOnly value={this.props.quantity} style={{textAlign: 'right'}}></input>
                <Button className="plus-bttn" onButtonClick={this.props.plusQuantity}></Button>
            </React.Fragment>
        )
    }
}