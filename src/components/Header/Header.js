import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        fontSize: 32,
        fontFamily: ['Segoe UI']
    }
})

export const Header = ({ label, style }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} style={style} variant="h2" gutterBottom>
            {label}
        </Typography>
    )
}

