import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalendarBoard from './Calendar';
import TempDrawer from './sidebar';

function App() {
    return (
        <div className="App">
            <Grid container direction="row" >
                <Grid item>
                    <TempDrawer />
                </Grid>
                <Grid item xs={11} sm={8}>
                    <Paper>
                        <Typography>Main Section</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={11} sm={3}>
                    <Paper>
                        <Typography>Calendar</Typography>
                        <CalendarBoard></CalendarBoard>
                        Task Here
              </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
