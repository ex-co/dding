import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CalendarBoard from '../Calendar';
import TempDrawer from '../sidebar';

import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import { borders } from '@material-ui/system';

import './App.css'

class App extends React.Component {

    render() {g
        return (
            <div className="mainContainer">
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer />
                    </Grid>
                    <Grid item className="mainSection">
                        <Typography>Main Section</Typography>
                    </Grid>
                    <Grid item className="calendarSection">
                        <Typography>Calendar</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
