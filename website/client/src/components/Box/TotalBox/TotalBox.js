import React from 'react'
import Button from '../../Button/Button';
import Label from '../../Label/Label';
import './TotalBox.scss';

export default class TotalBox extends React.Component {
    render() {
        return (
            <>
            <div className="wrapped-total-box">
                <div className="row" style={{paddingTop: 30}}>
                    <div className="col-md-8 wrapped-left">
                        <Label className="detail-checkout" title="Shipping and Handling:" />
                        <Label className="detail-checkout" title="Total product:" />
                    </div>
                    <div className="col-md-4 wrapped-right">
                        <Label className="detail-checkout" title="Free" />
                        <Label className="detail-checkout" title={this.props.total} />
                    </div>
                </div>
                <div className="row line" style={{marginLeft: 10, marginRight: 10}}></div>
                <div className="row" style={{paddingBottom: 20}}>
                    <div className="col-md-8 wrapped-left">
                        <Label className="subtotal-checkout" title="Subtotal" />

                    </div>
                    <div className="col-md-4 wrapped-right">
                        <Label className="subtotal-price" title={this.props.subtotal} />
                    </div>
                </div>
            </div>
            <div style={{paddingTop: 10, width: '100%'}}>
                <Button className='check-out-bttn' title="Check out" />
            </div>
            </>
        )
    }
}