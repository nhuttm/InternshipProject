import React from 'react';
import './Filter.scss';
export default class CheckBoxButton extends React.Component {
    render() {
        return (
            <div class="checkbox-div">
                <label className="wrapped-title-checkbox" for={this.props.id}>
                    <span className="title-checkbox">{this.props.name}</span>
                </label>
                <input type="checkbox" id={this.props.id} className="checkbox" name={this.props.checkboxName} value={this.props.value}/>
            </div>
        )
    }
}