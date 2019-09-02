import React from 'react';
import './Progress.css';

<<<<<<< HEAD
const ProgressInfo = ({title, number}) => {
    return (
        <div className='progressInfo'>
            <div className='progressInfoItem' style={{fontSize: 20}}>{title}</div>
            <div className='progressInfoItem' style={{textAlign: "center"}}># {number}</div>
        </div>
    );
};
=======
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
>>>>>>> Add Agendar section

export default ProgressInfo;