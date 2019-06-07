import React from 'react';
import Label from '../Label/Label';
import StarRatings from 'react-star-ratings';
import './CommentBox.scss';

export default class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <div className="row" style={{margin: 0, padding: 10}}>
                    <Label title={this.props.title} className="title-comment"/>
                </div>
                <div className="row" style={{margin: 0, paddingLeft: 10}}>
                    <StarRatings
                        rating={this.props.rating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension={15}
                    />
                </div>
                <div className="row" style={{margin: 0, padding: 10}}>
                    <p className="content-comment">{this.props.content}</p>
                </div>
            </div>
        )
    }
}