import React from 'react';
import BackGround from './DDing_background.png'

const Header = () => {

    const styles = {
        headerStyle: {
            backgroundImage: `url(${BackGround})`,
            height: '45px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        canvas: {
            height: '45px'
        }
    };

    return (
        <div style={styles.headerStyle}>
            <img alt="Jaewon" style={styles.canvas} src={process.env.PUBLIC_URL + '/DDing_Icon3.png'} />
        </div>
    )
}

export default Header;