import React from 'react';
import { Image } from 'semantic-ui-react';
import './Image.scss';
import { Link } from 'react-router-dom';

export default class CategoryImage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Image src={process.env.PUBLIC_URL + this.props.imgSrc}
                                as='img'
                                size='large'
                                centered
                                style={{width: 400, height: 365, paddingTop: 30, objectFit: 'cover'}}
                                />
                                <div className='category'>{this.props.title}</div>
                                <div className='line-white'></div>
                                <Link to={{ pathname: this.props.link}} className="shop-now">Shop now</Link>
            </React.Fragment>
        )
    }
}