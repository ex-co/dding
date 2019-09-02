import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'

import Dontainer from '../Interface/Dontainer'
import TempDrawer from '../sidebar'
import HeaderSection from './HeaderSection'
import ProgressSection from '../Progress/ProgressSection'

import BoardContainer from '../Board/BoardContainer';
import Calendar from '../Calender/Calendar'

import * as dm from '../Manager/DataManager'

class App extends React.Component {

    state = {
        user: "yegeeee",
        board: BoardContainer,
        calendar: Calendar,
        
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
                        <ProgressSection title="" content=""></ProgressSection>
                        <Dontainer title="Agenda" content="contents"></Dontainer>
                        <Dontainer title="Boards" content={this.state.board}></Dontainer>
                    </Grid>
                    <Grid item className="calendarSection">
                        <Dontainer title="Calendar" content={this.state.calendar}></Dontainer>
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
