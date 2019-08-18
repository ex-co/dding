import React from 'react'
import Grid from '@material-ui/core/Grid'

import Dontainer from '../Interface/Dontainer'
import Progress from '../Progress/Progress';

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
                        <Progress title={"TODO"} number={73}></Progress>
                    </Grid>
                    <Grid item xs={4}>
                        <Progress title={"DOING"} number={14}></Progress>
                    </Grid>
                    <Grid item xs={4}>
                        <Progress title={"DONE"} number={2}></Progress>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProgressSection;