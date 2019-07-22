import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
          <Grid container direction="row" spacing={16}>
            <Grid item xs={3} sm={6} md={8}>
              <Paper>
                <Typography>Main Section</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
              <Paper>
                <Typography>Calendar Section</Typography>
              </Paper>
            </Grid>
          </Grid>
      </div>
  );
}

export default App;
