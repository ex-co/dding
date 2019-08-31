import React from 'react'
import BackGround from './DDing_background.png'

class HeaderSection extends React.Component {

    styles = {
        headerStyle:{
            backgroundImage: `url(${BackGround})`,
            height:'45px',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
        },
        canvas: {
            height:'45px'
        }
      };

    render() {
        return (
            <div style={this.styles.headerStyle}>
                <img alt="Jaewon" style = {this.styles.canvas} src={process.env.PUBLIC_URL + '/DDing_Icon3.png'} />
            </div>
        )
    }
}

export default HeaderSection;