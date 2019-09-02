import React from 'react';
import './Progress.css';
import { ExpansionPanelDetails } from '@material-ui/core';

<<<<<<< HEAD
const ProgressContent = ({title, number}) => {
    return (
        <ExpansionPanelDetails>
            <ul className="progressContent">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
        </ExpansionPanelDetails>
    );
};
=======
class ProgressContent extends React.Component {
    render() {
        return (
            <ExpansionPanelDetails>
                <ul className="progressContent">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
            </ExpansionPanelDetails>
        )
    }
}

>>>>>>> Add Agendar section
export default ProgressContent;
