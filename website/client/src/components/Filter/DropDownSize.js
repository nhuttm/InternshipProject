import React from 'react';
import './Filter.scss';

export default class DropDownSize extends React.Component {

    handleButtonClickS = () => {

    }

    handleButtonClickM = () => {
        
    }

    handleButtonClickL = () => {
        
    }

    render() {
        return (
            // <div className="row">
            //     <div className="col-md-4">
            //         <Button className="size-bttn" title="S" onButtonClick={this.handleButtonClickS} />
            //     </div>
            //     <div className="col-md-4">
            //         <Button className="size-bttn" title="M" onButtonClick={this.handleButtonClickM} />
            //     </div>
            //     <div className="col-md-4">
            //         <Button className="size-bttn" title="L" onButtonClick={this.handleButtonClickL} />
            //     </div>
            // </div>
            <div className="row" style={{paddingLeft: 13}}>
                <label className="size-container" style={{paddingLeft: 30}}>
                    <input type="radio" className="color-bttn" name="size" />
                    <span class="checkmark">S</span>
                </label>
                <label className="size-container" style={{paddingLeft: 30}}>
                    <input type="radio" className="color-bttn" name="size"/>
                    <span class="checkmark">M</span>
                </label>
                <label className="size-container" style={{paddingLeft: 30}}>
                    <input type="radio" className="color-bttn" name="size"/>
                    <span class="checkmark">L</span>
                </label>
                </div>
        )
    }
}