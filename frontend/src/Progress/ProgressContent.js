import React from 'react';
import './Progress.css';
import { ExpansionPanelDetails } from '@material-ui/core';

class ProgressContent extends React.Component {

    state = {
        progressData: []
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            progressData: nextProps.progressData
        });
    }

    render() {
        return (
            <ExpansionPanelDetails>
                <ul className="progressContent">
                    {
                        this.state.progressData.map((title, index) => <li key={index}>{title}</li>)
                    }
                </ul>
            </ExpansionPanelDetails>
        )
    }
}

export default ProgressContent;
