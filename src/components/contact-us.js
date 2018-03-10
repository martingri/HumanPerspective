import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import Bullet from 'material-ui-icons/Lens';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function ContactUs(props) {
  const { classes } = props;

  return (
    <Grid container spacing={24} id="contact-us">
      <Grid item xs={2}/>
      <Grid item xs={8}>
        <Typography variant="display1" gutterBottom align='center'>
          GET IN TOUCH
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          We love working with like minded people so if you think we're a good match for you and your venture hit us up by phone or email.
        </Typography>
        <Typography variant="title" gutterBottom align='left'>
          EMAIL
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          martin.grimeland(att)gmail.com
        </Typography>
        <Typography variant="title" gutterBottom align='left'>
          TELEPHONE
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          +61 (0) 47 52 55 779
        </Typography>
        <div style={{height:'65vh'}}/>
      </Grid>
     </Grid>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);
