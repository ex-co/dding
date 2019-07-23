import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalendarBoard from './Calendar';
import TempDrawer from './sidebar';

function App() {
  return (
    <div className="App">
    <Grid container direction="row" justify="flex-start" >
    <Grid item>
    <TempDrawer />
    </Grid>
    
    <Grid item >
    <Grid container direction="row">
    <Grid item xs={3} sm={6} md={8}>
              <Paper>
                <Typography>Main Section</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
              <Paper>
                <Typography>Calendar</Typography>
                <div style={{justifyContent:'center'}}>
                  <CalendarBoard></CalendarBoard>
                </div>
                <div>
                  Task Here
                </div>
              </Paper>
            </Grid>
          </Grid>
          </Grid>
    </Grid>
    </div>
  );
}

export default App;
