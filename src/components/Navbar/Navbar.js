import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
      backgroundColor: 'white',
      color: 'black'
  }, 
 tab: {
      color: 'black'
  }
}));

const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const Navbar = ({ title, tabs }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, value) => {
        setValue(value)
    }
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
            <Tabs className={classes.tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <Button color="inherit">
                <SearchIcon />
            </Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}