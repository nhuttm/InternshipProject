import React from 'react';
import Button from '../Button/Button';

export default class DropDownSize extends React.Component {

    handleButtonClickS = () => {

    }

    handleButtonClickM = () => {
        
    }

    handleButtonClickL = () => {
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Button className="size-bttn" title="S" onButtonClick={this.handleButtonClickS} />
                </div>
                <div className="col-md-4">
                    <Button className="size-bttn" title="M" onButtonClick={this.handleButtonClickM} />
                </div>
                <div className="col-md-4">
                    <Button className="size-bttn" title="L" onButtonClick={this.handleButtonClickL} />
                </div>
            </div>
        )
    }
}