import React from 'react';
import Select from 'react-select';
import './SelectBox.scss';
import Label from '../Label/Label';

export default class SelectBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: props.options,
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <Select className={this.props.classNameSelect} options={this.state.options} defaultValue={this.props.options[0]} onChange={this.props.onChange}/>
            </div>
        )
    }
}