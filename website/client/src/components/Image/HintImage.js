import React from 'react';
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import "./Image.scss";

export default class HintImage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{width: '100%', height: 180, overflow: 'hidden'}}>
                <Image src={this.props.imgSrc}
                    as='img'
                    size='large'
                    className="product-img"
                    centered
                    style={{ width: 180, height: 269, objectFit: 'cover' }} />
                </div>
                <Label title={this.props.title} className="hint-product" />
            </React.Fragment>
        )
    }
}