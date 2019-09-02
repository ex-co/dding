import React from 'react';
import './Progress.css';

const ProgressInfo = ({title, number}) => {
    return (
        <div className='progressInfo'>
            <div className='progressInfoItem' style={{fontSize: 20}}>{title}</div>
            <div className='progressInfoItem' style={{textAlign: "center"}}># {number}</div>
        </div>
    );
};

export default ProgressInfo;