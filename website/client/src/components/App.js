import React from 'react';
import CategoryImage from './Image/CategoryImage';
import { Image } from 'semantic-ui-react';
import HeaderBar from './HeaderBar/HeaderBar';
import NavBar from './NavBar/NavBar';

import "./App.scss";
import Anchor from './Anchor/Anchor';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                    
                    <div className="container-fluid">
                        <Image src={process.env.PUBLIC_URL + '/img/shopping.jpg'}
                            as='img'
                            centered
                            style={{ width: 1100, height: 550, paddingTop: 30, objectFit: 'cover' }} />
                        <Anchor title='Shop now' className='shop-home' link="/products"/>
                    </div>
                    <div className='container-fluid'>
                        <div className='row' style={{ width: 1100, margin: 'auto' }}>
                            <div className='col-md-3' style={{ position: 'relative' }}>
                                <CategoryImage title="Men" imgSrc="/img/men.jpg" link="/products"/>
                            </div>
                            <div className='col-md-3' style={{ position: 'relative' }}>
                                <CategoryImage title="Ladies" imgSrc="/img/girl.jpg" link="/products"/>
                            </div>
                            <div className='col-md-3' style={{ position: 'relative' }}>
                                <CategoryImage title="Girls" imgSrc="/img/girl_child.jpg" link="/products"/>
                            </div>
                            <div className='col-md-3' style={{ position: 'relative' }}>
                                <CategoryImage title="Boys" imgSrc="/img/boy.jpg" link="/products"/>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}