import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalendarSection from '../CalenderSection/Calendar';
import * as dm from '../Manager/DataManager';
import Typography from '@material-ui/core/Typography';
import TempDrawer from '../sidebar';
import './App.css'

import Agenda from '../Agenda/Agenda.js';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {

    state = {
        user: "yegeeee"
    }
    _getContent = () => {

        const tasks = dm.default.getUserTask(this.state.user);
        const teams = dm.default.getUserTeam(this.state.user);

        console.log(tasks[0]);
        console.log(tasks[1]);

        return (
            <Grid container className="gridContainer">
            <Grid item className="dock">
                <TempDrawer />
            </Grid>
            <Grid item className="mainSection">
                <Typography>Main Section</Typography>
                <Grid container>
                    <Grid item>
                        <Agenda title={"TODO"} number={53}></Agenda>
                    </Grid>
                    <Grid item>
                        <Agenda title={"DOING"} number={13}></Agenda>
                    </Grid>
                    <Grid item>
                        <Agenda title={"DONE"} number={99}></Agenda>
                    </Grid>
                </Grid>

                {JSON.stringify(tasks)}
            </Grid>
            <Grid item className="calendarSection">
                <Typography>Calendar</Typography>
            </Grid>
        </Grid>
        )
    }

    render() {
        return (
            <div className="mainContainer">
                {this._getContent()}
                </div>
        )
    };
}          

export default App;
