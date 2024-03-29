import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'

import Dontainer from '../Interface/Dontainer'
import TempDrawer from '../sidebar'
import Progress from '../Progress/ProgressSection'
import Header from '../Header/Header';
import BoardContainer from '../Board/BoardContainer';
import Calendar from '../Calender/Calendar'
import Agendar from '../Agendar/Agendar';

class App extends React.Component {

    state = {
        user: "yegeeee",
        board: BoardContainer,
        calendar: Calendar,
        agenda: Agendar,
        data: null
    }

    _getContent = () => {
        return (
            <div className="outerContainer">
                <Header></Header>
                <Grid container className="gridContainer">
                    <Grid item className="dock">
                        <TempDrawer />
                    </Grid>
                    <Grid item className="mainSection">
                        <Progress title="" content=""></Progress>
                        <Dontainer title="Agenda" content={this.state.agenda}></Dontainer>
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
