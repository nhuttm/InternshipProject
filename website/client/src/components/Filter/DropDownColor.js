import React from 'react';
import './Filter.scss';
export default class DropDownColor extends React.Component{
    render(){
        return (
            <div className="row" style={{paddingLeft: 20}}>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color" />
                    <span class="red checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span class="yellow checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span class="blue checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span class="pale-orange checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span class="charcoal-grey checkmark"></span>
                </label>
                <label className="color-container">
                    <input type="radio" className="color-bttn" name="color"/>
                    <span class="white-three checkmark"></span>
                </label>
            </div>
        )
    }
}