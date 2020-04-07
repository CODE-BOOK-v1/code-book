import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    color: '#595959',
    fontFamily: 'Segoe UI',
    fontSize: 22
  },
  navbar: {
    backgroundColor: 'white'
  }
}));

export const Navbar = ({ img, name }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Avatar alt={name} src={img}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}