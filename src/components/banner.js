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
    <div>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bannerImg}
      strength={200}>
      <div style={{ height: '90vh' }} >
          <Grid item>
            <Typography className={classes.bannerText} variant="display3" gutterBottom>
              {props.bannerText}
            </Typography>
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
