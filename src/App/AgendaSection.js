import React from 'react'
import Dontainer from '../Interface/Dontainer'

class AgendaSection extends Dontainer {

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
                    Contents here
            </div>
            </div>
        )
    }
}

export default AgendaSection;