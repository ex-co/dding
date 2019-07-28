import React from 'react';
import Typography from '@material-ui/core/Typography';
import TempDrawer from '../sidebar';

import { Grid } from '@material-ui/core';

import './App.css'
import Agenda from '../Agenda';

class App extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer />
                    </Grid>
                    <Grid item className="mainSection">
                        <Typography>Main Section</Typography>
                        <Grid container style={{display: 'block'}}>
                            <Agenda title={"TODO"} number={53}></Agenda>
                            <Agenda title={"DOING"} number={13}></Agenda>
                            <Agenda title={"DONE"} number={99}></Agenda>
                        </Grid>
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
