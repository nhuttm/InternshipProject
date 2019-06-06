import React from 'react';

import { Accordion, Icon } from 'semantic-ui-react'
import './Filter.scss';
import DropDownSize from './DropDownSize';
export default class Filter extends React.Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
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
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Brand
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private
            owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
            owner allows you to assess the pedigree and upbringing of your dog before choosing to
            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
            who may not find one so readily.
          </p>
        </Accordion.Content>
        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Price
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 3}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>
        <Accordion.Title style={{paddingLeft: 50}} active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Available
        </Accordion.Title>
        <Accordion.Content style={{paddingLeft: 50}} active={activeIndex === 4}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}