import React from 'react';

class LogoImage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className={this.props.className}></img>
            </React.Fragment>
        );
    }
}

export default LogoImage;