import React, { Component } from 'react'
import Label from '../Label/Label';

export default class PreviewImage extends Component {
    render() {
        return (
            <div className="wrapped-uploadfile">
                <div className="upload-file">
                    {
                        this.props.img.map((item, index) => {
                            return (<div className="preview-image-item">
                                <img src={item} className="file-img" />
                                <input type="file" multiple accept="image/*" className="input-file-img" onChange={e => this.props.imgChange(e, index)}/>
                            </div>)
                        })
                    }

                </div>
                <Label title="You can add up to 4 photos. The 1st photo will be set as cover (main photo)." className="hint-label" />
            </div>
        )
    }
}
