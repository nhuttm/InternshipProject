import React, { Component } from 'react'
import { connect } from 'react-redux';
import IconHeadbar from './IconHeadbar';
import './HeaderBar.scss';
import UserAva from './UserAva';
import Label from '../Label/Label';

class AdminHeaderBar extends Component {
    render() {
        return (
            <div className="row" style={{ height: '10%' }}>
                <div className="col-md-7">
                    <Label className="title-page-admin" />
                </div>
                <div className="col-md-5" style={{ margin: 'auto' }}>
                    <div className="row">
                        <div className="col-md-8">
                            <UserAva name={this.props.user.fullname} />
                        </div>
                        <div className="col-md-2" style={{ margin: 'auto', textAlign: 'center', marginLeft: -70 }}>
                            <IconHeadbar number="9+" link="#" classNameLink="mail" classNameLabel="number-mail" />
                        </div>
                        <div className="col-md-2" style={{ margin: 'auto', textAlign: 'center', marginLeft: -70 }}>
                            <IconHeadbar number="9+" link="#" classNameLink="notify" classNameLabel="number-notify" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(AdminHeaderBar);
