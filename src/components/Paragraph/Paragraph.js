import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        fontSize: 22,
        fontFamily: ['Segoe UI'],
        color: '#595959'
    }
})

export const Paragraph = ({ label, style }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} style={style} variant="h5" gutterBottom>
            {label}
        </Typography>
    )
}

