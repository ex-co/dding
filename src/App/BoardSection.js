import React from 'react'
import Dontainer from '../Interface/Dontainer'
import BoardContainer from '../Board/BoardContainer';

class BoardSection extends Dontainer {

    constructor(props) {
        super();
        this.setTitle(props.title);
    }

    render() {
        return (
            <div style={this.dontainerStyle}>
                <div style={this.titleStyle}>
                    {this.titleStyle.title}
                </div>
                <div style={this.contentStyle}>
                    <BoardContainer></BoardContainer>
                </div>
            </div>
        )
    }
}

export default BoardSection;