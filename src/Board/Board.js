import React from 'react';
import './Board.css';

const Board = ({teamName}) => {
    return (
        <div className="board">
            <div className="boardContent">{teamName}</div>
        </div>
    )
}

export default Board;