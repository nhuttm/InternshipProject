import React from 'react';

export default class RadioColorButton extends React.Component{
    render(){
        return (
            <React.Fragment>
                <button type="radio" class={this.props.className} name={this.props.name} value={this.props.value}></button>
            </React.Fragment>
        )
    }
}