import React from 'react';

import { Accordion, Icon } from 'semantic-ui-react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './Filter.scss';
import DropDownSize from './DropDownSize';
import DropDownColor from './DropDownColor';
import DropDownBrand from './DropDownBrand';
import DropDownAvailable from './DropDownAvailable';

export default class Filter extends React.Component {
  constructor(){
    super();
    this.state = {
       activeIndex: -1,
       price: 0
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  changePrice = (value) => {
    this.setState({price: value});
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Size
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 0}>
            <DropDownSize />
        </Accordion.Content>

        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Color
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 1}>
          <DropDownColor />
        </Accordion.Content>

        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Brand
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 2}>
          <DropDownBrand />
        </Accordion.Content>
        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Price
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 3}>
         <Slider value={this.state.price} orientation="horizontal" onChange={this.changePrice}/>
        </Accordion.Content>
        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Available
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 4}>
          <DropDownAvailable />
        </Accordion.Content>
      </Accordion>
    )
  }
}