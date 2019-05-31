import React from 'react';
import DropDown from './DropDown';
import TableShowAllClothes from '../Table/TableShowAllClothes';

export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{textAlign: "center", paddingTop: 10}}>
                <ul>
                    <DropDown title="Men"/>
                    <DropDown title="Ladies"/>
                    <DropDown title="Boys"/>
                    <DropDown title="Girls"/>
                </ul>
            </div>
            <div className="line"></div>
            <TableShowAllClothes />
            </React.Fragment>
        );
    }
}