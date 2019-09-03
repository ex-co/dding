import React from 'react';

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Agendar.css';

class Agendar extends React.Component {

    today = new Date();

    shiftDate(date, numDays) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + numDays);
        return newDate;
    }

    getRange(count) {
        return Array.from({ length: count }, (_, i) => i);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    constructor(props) {
        super(props);
        this.startDate = this.shiftDate(this.today, -150);
        this.endDate = this.today;
        this.values = this.getRange(200).map(index => {
            return {
                date: this.shiftDate(this.today, -index),
                count: this.getRandomInt(1, 3)
            };
        });
    }

    render() {
        return (
            <CalendarHeatmap
                startDate={this.startDate}
                endDate={this.endDate}
                values={this.values}
                showWeekdayLabels={true}
                classForValue={value => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`;
                }}
                gutterSize={2}>

            </CalendarHeatmap>
        )
    }
}

export default Agendar;