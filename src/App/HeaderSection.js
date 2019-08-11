import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography, Box, Avatar } from '@material-ui/core'

class HeaderSection extends React.Component {

    headerStyle={
        backgroundColor: "#fcba03"
    }

    render() {
        return (
            <Grid container style={this.headerStyle}>
                <Grid item><Avatar alt="Jaewon" src={process.env.PUBLIC_URL + '/bells.png'} /></Grid>
                <Grid item>
                    <Typography>
                        <Box fontWeight="fontWeightBold" fontSize={32} fontStyle="italic" fontFamily="Arial" letterSpacing={3}>
                            D-Ding~
                            </Box>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default HeaderSection;