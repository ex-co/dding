import React from 'react';
import './Progress.css';

class ProgressInfo extends React.Component {
    render() {
        return (
            <div className='progressInfo'>
                <div className='progressInfoItem' style={{ fontSize: 20 }}>{this.props.title}</div>
                <div className='progressInfoItem' style={{ textAlign: "center" }}># {this.props.number}</div>
            </div>
        )
    }
}

export default ProgressInfo;