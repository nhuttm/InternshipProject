import React from 'react';
import './Filter.scss';
export default class DropDownColor extends React.Component{
    render(){
        return (
            <div className="row" style={{paddingLeft: 20}}>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color" />
                    <span className="red checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span className="yellow checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span className="blue checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span className="pale-orange checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span className="charcoal-grey checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span className="white-three checkmark"></span>
                </label>
            </div>
        )
    }
}