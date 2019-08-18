import React from 'react';
import './Progress.css';

const ProgressInfo = ({title, number}) => {
    return (
        <div class='progressInfo'>
            <div class='progressInfoItem' style={{fontSize: 20}}>{title}</div>
            <div class='progressInfoItem' style={{textAlign: "center"}}># {number}</div>
        </div>
    );
};

export default ProgressInfo;