import React from 'react';
import './Board.css';

const Board = ({teamName}) => {
    return (
        <div class="board">
            <div class="boardContent">{teamName}</div>
        </div>
    )
}

export default Board;