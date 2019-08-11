import Calendar from '../Calender/Calendar'
import Dontainer from '../Interface/Dontainer'
import React from 'react'

class CalendarSection extends Dontainer {

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
                <Calendar></Calendar>
            </div>
        )
    }
}

export default CalendarSection;