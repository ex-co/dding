import React from 'react';
import './Progress.css';
import ProgressContent from './ProgressContent';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ProgressInfo from './ProgressInfo';

const Progress = ({title, number}) => {
    return (
        <ExpansionPanel style={{margin: '15px', rounded: true}}>
            <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <ProgressInfo title={title} number={number}></ProgressInfo>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ProgressContent></ProgressContent>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Progress;