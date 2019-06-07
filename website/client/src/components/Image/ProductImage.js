import React from 'react'
import { Image } from 'semantic-ui-react';

export default class ProductImage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Image src={process.env.PUBLIC_URL + this.props.imgSrc}
                                as='img'
                                centered
                                className={this.props.className}
                                />
            </React.Fragment>
        )
    }
}