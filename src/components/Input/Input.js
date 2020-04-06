import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { INPUT_FEILD, FONT_FAMILY } from '../../utils/theme'
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    width: '100%',
    fontFamily: FONT_FAMILY,
    '& .MuiInput-underline': {
        borderBottomColor: INPUT_FEILD.BORDER_COLOR,
        color: INPUT_FEILD.TEXT_COLOR,
        fontFamily: FONT_FAMILY
    },
    '& label.Mui-focused': {
      color: INPUT_FEILD.BORDER_COLOR,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: INPUT_FEILD.BORDER_COLOR,
      color: INPUT_FEILD.TEXT_COLOR
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export const Input = ({placeholder, onBlurHandler}) => {
    const classes = useStyles();
    const [input, setInput] = useState('');


    return (
        <CssTextField 
                className={classes.margin} 
                id="custom-css-standard-input" 
                label={placeholder}
                value={input}
                onKeyUp={e => e.keyCode === 13 ? onBlurHandler(input) : null}
                onChange={ e => setInput(e.target.value) }
                onBlur={()=> onBlurHandler(input)}
            />
    );
}

Input.prototypes = {
    placeholder: PropTypes.string.isRequired,
    onBlurHandler: PropTypes.func.isRequired 
}