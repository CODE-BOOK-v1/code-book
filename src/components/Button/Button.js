import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUButton from '@material-ui/core/Button';
import { COLOR, TEXT, FONT_FAMILY } from '../../utils/theme';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: FONT_FAMILY,
        height: 45,
    },
    primary: {
        backgroundColor: COLOR.PRIMARY,
        color: TEXT.PRIMARY,
        '&:hover': {
            backgroundColor: COLOR.PRIMARY,
            color: TEXT.PRIMARY,
        }
    },
    secondary: {
        backgroundColor: COLOR.SECONDARY,
        color: TEXT.SECONDARY,
        '&:hover': {
            backgroundColor: COLOR.SECONDARY,
            color: TEXT.SECONDARY,
        }
    },
    small: {
        width: 140
    },
    large: {
        width: 370
    }
}));



export const Button = ({secondary, large, label, children, right, left, Icon, onClickHandler}) => {
    const classes = useStyles({secondary, large});
    console.log(typeof Icon);
    return (
            <MUButton 
                variant="contained" 
                className={
                    clsx(classes.root, 
                         secondary ? classes.secondary : classes.primary,
                         large ? classes.large : classes.small)
                    }
                onClick={onClickHandler}
            >
                {left && <Icon />}
                {children || label}
                {right && <Icon />}
            </MUButton>
    )
}

Button.propTypes = {
    secondary: PropTypes.bool,
    large: PropTypes.bool,
    label: PropTypes.string,
    right: PropTypes.bool,
    left: PropTypes.bool,
    Icon: PropTypes.object,
    onClickHandler: PropTypes.func.isRequired
}

Button.defaultProps = {
    secondary: false,
    large: false
}
