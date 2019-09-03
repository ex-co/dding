import React from 'react'
import Dontainer from '../Interface/Dontainer'
import Agendar from '../Agendar/Agendar';

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
                    <Agendar></Agendar>
                </div>
            </div>
        )
    }
}

export default AgendaSection;