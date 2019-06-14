import React from 'react';
import './Filter.scss';
import CheckBoxButton from './CheckBoxButton';
export default class DropDownAvailable extends React.Component {
    render() {
        return (
            <div className="col-md-12" style={{ paddingLeft: 20 }} onChange={this.props.onChange}>
                <div className="row" style={{backgroundColor: '#fafafa', position: 'relative'}}>
                    <CheckBoxButton value="In-store" checkboxName="available" name="In-store" id="In-store"/>
                </div>
                <div className="row dropdown-brand">
                    <CheckBoxButton value="Out of stock" checkboxName="brand" name="Out of stock" id="Out of stock"/>
                </div>
            </div>
        )
    }
}