import React from 'react'
import { Image } from 'semantic-ui-react';
import Button from '../Button/Button';

export default class ProductImage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Image src={process.env.REACT_APP_PATH_IMAGE + this.props.imgSrc}
                                as='img'
                                centered
                                className={this.props.className}
                                />
                <Button className={this.props.classNameButton} onButtonClick={e => this.props.onChangeImage(e, this.props.imgIndex)}/>
            </React.Fragment>
        )
    }
}