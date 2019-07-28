import React from 'react';
import './Agenda.css';
import AgendaContent from './AgendaContent';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import AgendaInfo from './AgendaInfo';

const Agenda = ({title, number}) => {
    return (
        <ExpansionPanel style={{margin: '10px', rounded: true}}>
            <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <AgendaInfo title={title} number={number}></AgendaInfo>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <AgendaContent></AgendaContent>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Agenda;