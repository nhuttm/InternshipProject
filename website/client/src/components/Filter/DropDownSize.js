import React from 'react';
import './Filter.scss';
import SizeRadioButton from './SizeRadioButton';
import * as Size from '../../constant/constantSize';

export default class DropDownSize extends React.Component {
    render() {
        return (
            <div className="row" style={{paddingLeft: 13}} onChange={this.props.onChange}>
                <SizeRadioButton size={Size.S}/>
                <SizeRadioButton size={Size.M}/>
                <SizeRadioButton size={Size.L}/>
            </div>
        )
    }
}