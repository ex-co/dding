import React from 'react';
import './Agenda.css';
import { ExpansionPanelDetails } from '@material-ui/core';

const AgendaContent = ({title, number}) => {
    return (
        <ExpansionPanelDetails>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
        </ExpansionPanelDetails>
    );
};
export default AgendaContent;