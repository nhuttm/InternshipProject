import React from 'react';
import './Filter.scss';
import CheckBoxButton from './CheckBoxButton';
export default class DropDownBrand extends React.Component {
    render() {
        return (
            <div className="col-md-12" style={{ paddingLeft: 20 }} onChange={this.props.onChange}>
                <div className="row" style={{backgroundColor: '#fafafa', position: 'relative'}}>
                    <CheckBoxButton value="Zara" checkboxName="brand" name="Zara" id="Zara"/>
                </div>
                <div className="row dropdown-brand">
                    <CheckBoxButton value="H&amp;M" checkboxName="brand" name="H&amp;M" id="H&amp;M"/>
                </div>
                <div className="row dropdown-brand">
                <CheckBoxButton value="Pull&amp;Bear" checkboxName="brand" name="Pull&amp;Bear" id="Pull&amp;Bear"/>
                </div>
                <div className="row dropdown-brand">
                <CheckBoxButton value="Dior" checkboxName="brand" name="Dior" id="Dior"/>
                </div>
                <div className="row dropdown-brand">
                <CheckBoxButton value="Chanel" checkboxName="brand" name="Chanel" id="Chanel"/>
                </div>

            </div>
        )
    }
}