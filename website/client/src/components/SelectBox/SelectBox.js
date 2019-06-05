import React from 'react';
import { Select } from 'semantic-ui-react';

export default class SelectBox extends React.Component{

    constructor(){
        super();
        this.state = {
            options: [{
                key: 'Popularity',
                text: 'Popularity',
                value: 'Popularity',
            }, 
            {
                key: 'NameAZ',
                text: 'Name: A-Z',
                value: 'NameAZ',
            },
            {
                key: 'Price1',
                text: 'Price: lowest to highest',
                value: 'Price1',
            },
            {
                key: 'Price2',
                text: 'Price: highest to lowest',
                value: 'Price2',
            }]
        }
    }

    render() {
        return (
            <div className={this.props.classNames}>
                <Select className="select-box" value="Popularity" options={this.state.options}  />
            </div>
        )
    }
}