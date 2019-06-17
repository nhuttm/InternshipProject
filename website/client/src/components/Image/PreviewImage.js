import React, { Component } from 'react'
import exportX from '../admintheme.png';

export default class PreviewImage extends Component {
    render() {
        return (
            <div className="upload-file">
                <div className="preview-image-item">
                    <img src={exportX} className="file-img"/>
                    <input type="file" className="input-file-img"/>
                </div>
                <div className="preview-image-item">
                    <img src={exportX} className="file-img"/>
                    <input type="file" className="input-file-img"/>
                </div>
                <div className="preview-image-item">
                    <img src={exportX} className="file-img"/>
                    <input type="file" className="input-file-img"/>
                </div>
                <div className="preview-image-item">
                    <img src={exportX} className="file-img"/>
                    <input type="file" className="input-file-img"/>
                </div>
            </div>
        )
    }
}
