import React from 'react'
import Grid from '@material-ui/core/Grid'

import Dontainer from '../Interface/Dontainer'
import Progress from './Progress';

class ProgressSection extends Dontainer {

    state = {
        todo: [],
        doing: [],
        done: []
    }

    constructor(props) {
        super(props);
        this.setPaddingZero();
        this.fetchDataFromServer();
    }

    fetchDataFromServer() {
        fetch('http://localhost:3001/api/test')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    todo: json.progressData.todo,
                    doing: json.progressData.doing,
                    done: json.progressData.done,
                })
            });
        
    }

    render() {
        return (
            <div style={this.dontainerStyle}>
                <Grid container>
                    <Grid item xs={4}>
                        <Progress title={"TODO"} progressData={this.state.todo}></Progress>
                    </Grid>
                    <Grid item xs={4}>
                        <Progress title={"DOING"} progressData={this.state.doing}></Progress>
                    </Grid>
                    <Grid item xs={4}>
                        <Progress title={"DONE"} progressData={this.state.done}></Progress>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProgressSection;