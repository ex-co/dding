import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalendarBoard from './Calendar';

function App() {
  return (
    <div className="App">
          <Grid container direction="row" spacing={16}>
            <Grid item xs={3} sm={6} md={9}>
              <Paper>
                <Typography>Main Section</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={3}>
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
      </div>
  );
}

export default App;
