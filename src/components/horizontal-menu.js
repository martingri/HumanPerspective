import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('data-something'));
}

function HorizontalMenu(props) {
  const { classes } = props;
  return (
    <Grid container spacing={18}>
      <Grid item xs={3}>
      <Button href="#" className={classes.button}>
        Home
      </Button>
      </Grid>
      <Grid item xs={3}>
      <Button href="#about-us" className={classes.button}>
        About Us
      </Button>
      </Grid>
      <Grid item xs={3}>
      <Button href="#services" className={classes.button}>
        Services
      </Button>
      </Grid>
      <Grid item xs={3}>
      <Button href="#contact-us" className={classes.button}>
        Contact Us
      </Button>
      </Grid>
    </Grid>
  );
}

HorizontalMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalMenu);