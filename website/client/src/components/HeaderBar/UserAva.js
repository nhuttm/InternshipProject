import React from 'react';
import Button from '../Button/Button';

export default class UserAva extends React.Component {

    handleAccountSetting = () => {

    }

    handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className="dropdown-user">
                <img className="user-avatar" src={this.props.imgSrc}></img>
                    <div className="dropdown-content-ava">
                    <Button className="bttn-account" title="Account setting" onButtonClick={this.handleAccountSetting} />
                    <Button className="bttn-logout" title="Logout" onButtonClick={this.handleLogout} />
                    </div>
            </div>
        );
    }
};