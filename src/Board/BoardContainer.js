import React from 'react';
import './Board.css';
import Board from './Board';

const BoardContainer = () => {
    return (
        <div className="boardContainer">
            <Board teamName="Skiptube"></Board>
            <Board teamName="Zooxo"></Board>
            <Board teamName="Rhyzio"></Board>
            <Board teamName="Buzzshare"></Board>
        </div>
    )
}

export default BoardContainer;