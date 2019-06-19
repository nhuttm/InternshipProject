import React from 'react';
import Select from 'react-select';
import './SelectBox.scss';

export default class MultiSelectBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: props.options,
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <Select className={this.props.classNameSelect} 
                options={this.state.options} 
                defaultValue={this.props.defaultValue} 
                onChange={this.props.onChange} 
                isMulti/>
            </div>
        )
    }
}