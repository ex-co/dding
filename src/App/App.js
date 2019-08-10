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
 //       const teams = dm.default.getUserTeam(this.state.user);

        return (
            <div className="gridContainer">
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer />
                    </Grid>
                    <Grid item className="mainSection">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h4">Main Section</Typography>
                        </ThemeProvider>
                        <Grid container>
                            <Grid item xs={4}>
                                <Agenda title={"TODO"} number={2}></Agenda>
                            </Grid>
                            <Grid item xs={4}>
                                <Agenda title={"DOING"} number={3}></Agenda>
                            </Grid>
                            <Grid item xs={4}>
                                <Agenda title={"DONE"} number={3}></Agenda>
                            </Grid>
                        </Grid>

                        {JSON.stringify(tasks)}
                    </Grid>
                    <Grid item className="calendarSection">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h4">
                                Calendar
                                </Typography>
                        </ThemeProvider>
                        <CalendarSection>

                        </CalendarSection>
                    </Grid>
                </Grid>

            </div>
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
