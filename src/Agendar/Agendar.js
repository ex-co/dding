import React from 'react';

import Calendar from 'react-github-contribution-calendar';
import './Agendar.css';

class Agendar extends React.Component {

    constructor(props) {
        super(props);
        this.values = {
            '2019-09-02': 1,
            '2019-09-03': 2,
            '2019-09-04': 3,
            '2019-09-05': 4,
            '2019-09-06': 4
        };
        this.until = '2019-09-30';
    }

    render() {
        return (
            <Calendar values={this.values} until={this.until}></Calendar>
        )
    }
}

export default Agendar;