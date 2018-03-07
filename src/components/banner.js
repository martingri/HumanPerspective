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
    height: '90vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  bannerText: {
    color: '#fff',
    textAlign: 'center'
  }
});

function Banner(props) {
  const { classes } = props;
  const bannerImg = require(`../assets/img/${props.bannerImg}`);

  return (
    <Grid container className={classes.banner} style={{ backgroundImage: `url(${bannerImg})` }}
      container
      alignItems='center'
      direction='column'
      justify='center'
    >
      <Grid item>
        <Typography className={classes.bannerText} variant="display3" gutterBottom>
          {props.bannerText}
        </Typography>
      </Grid>
    </Grid>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
