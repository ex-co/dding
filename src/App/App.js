import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalendarSection from '../CalenderSection/Calendar';
import TempDrawer from '../sidebar';
import './App.css'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {

    render() {

        return (
            <div className="mainContainer">
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer />
                    </Grid>
                    <Grid item className="mainSection">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h4">Main Section</Typography>
                        </ThemeProvider>
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
        );
    }
}

export default App;
