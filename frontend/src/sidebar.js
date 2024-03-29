import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

export default function TempDrawer() {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleSidebar = (isOpen) => {
        setState(isOpen);
    }

    const sideList = side => (
        <div className={classes.list}>
        <List>
            {['Jaewon', 'Yeji'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><Avatar>{text[0]}</Avatar></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        </div>
);

  return (
    <div>
        <Button onClick={() => toggleSidebar(true)}><MenuIcon /></Button>
        <Drawer open={state} onClose={() => toggleSidebar(false)}>
            {sideList('left')}
        </Drawer>
    </div>
  );
}