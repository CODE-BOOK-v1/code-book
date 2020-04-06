import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      color: '#595959',
      '&:hover': {
        boxShadow: '2px 2px 20px #00000029'
      }
    },
    media: {
      height: 140,
    },
  });

const StyledText = withStyles({
    root: {
        float: 'right'
    }
})(Typography);

export const CARD = ({ title, description, img, url }) => {
    const classes = useStyles();
    const today = new Date();
    const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <StyledText variant="body2" color="textSecondary" component="p" align="right">
                {date}
            </StyledText>
        </CardActions>
      </Card>
    );
}