import React from 'react';

const AgendaInfoStyle = {
    textAlign: 'center'
};

const AgendaInfo = ({title, number}) => {
    return (
        <div style={AgendaInfoStyle}>
            <div style={{textAlign: 'center'}}>{title}</div>
            <div style={{textAlign: 'center'}}># {number}</div>
        </div>
    );
};

export default AgendaInfo;