import React from 'react';
import './Progress.css';
import ProgressContent from './ProgressContent';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ProgressInfo from './ProgressInfo';

class Progress extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <ExpansionPanel style={{ margin: '15px', rounded: true }}>
                <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <ProgressInfo title={this.props.title} number={this.props.progressData.length}></ProgressInfo>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ProgressContent progressData={this.props.progressData}></ProgressContent>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default Progress;