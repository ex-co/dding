import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'

import TempDrawer from '../sidebar'
import HeaderSection from './HeaderSection'
import AgendaSection from './AgendaSection'
import ProgressSection from './ProgressSection'
import BoardSection from './BoardSection'
import CalendarSection from './CalendarSection'

import * as dm from '../Manager/DataManager'

class App extends React.Component {

    state = {
        user: "yegeeee"
    }

    _getContent = () => {
        return (
            <div className="outerContainer">
                <HeaderSection></HeaderSection>
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer/>
                    </Grid>
                    <Grid item className="mainSection">
                        <ProgressSection></ProgressSection>
                        <AgendaSection title="Agenda"></AgendaSection>
                        <BoardSection title="Boards"></BoardSection>
                    </Grid>
                    <Grid item className="calendarSection">
                        <CalendarSection title="Calendar"></CalendarSection>
                    </Grid>
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <div className="outerContainer">
                {this._getContent()}
            </div>
        )
    };
}

export default App;
