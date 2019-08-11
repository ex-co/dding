import React from 'react'
import Grid from '@material-ui/core/Grid'

import Dontainer from '../Interface/Dontainer'
import Agenda from '../Agenda/Agenda'

class ProgressSection extends Dontainer {

    constructor(props) {
        super();
        this.setPaddingZero();
    }

    render() {
        return (
            <div style={this.dontainerStyle}>
                <Grid container>
                    <Grid item xs={4}>
                        <Agenda title={"TODO"} number={2}></Agenda>
                    </Grid>
                    <Grid item xs={4}>
                        <Agenda title={"DOING"} number={3}></Agenda>
                    </Grid>
                    <Grid item xs={4}>
                        <Agenda title={"DONE"} number={3}></Agenda>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProgressSection;