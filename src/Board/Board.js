import React from 'react';
import './Board.css';

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="boardContent">{this.props.teamName}</div>
            </div>
        )
    }
}
export default Board;