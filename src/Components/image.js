import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div className="media my-3">
                <img src={process.env.PUBLIC_URL + "/image/" + this.props.image}
                    alt="media" width="500" height="400" />
                <div className="media-body text-left">
                    <h5 className="mt-0">{this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Image;