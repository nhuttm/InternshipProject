import React from 'react';
import './Filter.scss';
import ColorRadioButton from './ColorRadioButton';
import * as Color from '../../constant/constantColor';
export default class DropDownColor extends React.Component {
    render() {
        return (
            <div className="row" style={{ paddingLeft: 20 }} onChange={this.props.onChange}>
                <ColorRadioButton colorName={Color.RED} />
                <ColorRadioButton colorName={Color.YELLOW} />

                <ColorRadioButton colorName={Color.BLUE} />

                <ColorRadioButton colorName={Color.PALE_ORANGE} />

                <ColorRadioButton colorName={Color.CHARCOAL_GREY} />

                <ColorRadioButton colorName={Color.WHITE_THREE} />

            </div>
        )
    }
}