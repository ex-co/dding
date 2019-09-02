import React from 'react';
import './Board.css';

<<<<<<< HEAD
const Board = ({teamName}) => {
    return (
        <div className="board">
            <div className="boardContent">{teamName}</div>
        </div>
    )
=======
class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="boardContent">{this.props.teamName}</div>
            </div>
        )
    }
>>>>>>> Add Agendar section
}
export default Board;