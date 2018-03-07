import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  blurb: {
    marginTop: '1em',
  }
});

function Blurb(props) {
  const { classes } = props;

  return (
    <Typography className={classes.blurb} variant="caption" gutterBottom>
        TECHNICAL AND PRODUCT SERVICES
    </Typography>
  );
}

Blurb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blurb);
