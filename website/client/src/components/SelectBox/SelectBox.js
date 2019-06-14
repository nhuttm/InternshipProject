import React from 'react';
import { Select } from 'semantic-ui-react';

export default class SelectBox extends React.Component{

    render() {
        return (
            <div className={this.props.classNames}>
                <Select className="select-box" placeholder="Select" options={this.props.options}  />
            </div>
        )
    }
}