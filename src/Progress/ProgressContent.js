import React from 'react';
import './Progress.css';
import { ExpansionPanelDetails } from '@material-ui/core';

const ProgressContent = ({title, number}) => {
    return (
        <ExpansionPanelDetails>
            <ul class="progressContent">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
        </ExpansionPanelDetails>
    );
};
export default ProgressContent;
