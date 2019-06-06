import React from 'react';

export default class DropDownColor extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <Button type="radio" className="color-bttn red" />
                </div>
                <div className="col-md-4">
                    <Button type="radio" className="color-bttn yellow"/>
                </div>
                <div className="col-md-4">
                    <Button type="radio" className="color-bttn blue" />
                </div>
                <div className="col-md-4">
                    <Button type="radio" className="color-bttn pale-orange" />
                </div>
                <div className="col-md-4">
                    <Button type="radio" className="color-bttn charcoal-grey"/>
                </div>
            </div>
        )
    }
}