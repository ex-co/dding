import React from 'react';
import './Board.css';
import Board from './Board';

<<<<<<< HEAD
const BoardContainer = () => {
    return (
        <div className="boardContainer">
            <Board teamName="Skiptube"></Board>
            <Board teamName="Zooxo"></Board>
            <Board teamName="Rhyzio"></Board>
            <Board teamName="Buzzshare"></Board>
        </div>
    )
=======
class BoardContainer extends React.Component {
    render() {
        return (
            <div className="boardContainer">
                <Board teamName="Skiptube"></Board>
                <Board teamName="Zooxo"></Board>
                <Board teamName="Rhyzio"></Board>
                <Board teamName="Buzzshare"></Board>
            </div>
        )
    }
>>>>>>> Add Agendar section
}

export default BoardContainer;