import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { Parallax, Background } from 'react-parallax';

const styles = theme => ({
  banner: {
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bannerText: {
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px'
    },
  }
});

function Banner(props) {
  const { classes } = props;
  const bannerImg = require(`../assets/img/${props.bannerImg}`);

  return (
    <div>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bannerImg}
      strength={200}>
      <div style={{ height: '70vh' }} >
        <Grid container className={classes.banner}
          alignItems='center'
          direction='column'
          justify='center'>
          <Grid item>
            <Typography className={classes.bannerText} variant="display4" gutterBottom>
              {props.bannerText}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Parallax>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
