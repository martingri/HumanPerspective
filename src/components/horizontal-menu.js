import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Toolbar from "material-ui/Toolbar";
import Logo from './logo';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
});

function HorizontalMenu(props) {
  const { classes } = props;
  return (
    <Toolbar>
      <Grid container
        alignItems='center'
        direction='row'
        justify='flex-start'>
        <Grid item xs={2}>
          <Logo />
        </Grid>
      </Grid>
      <Grid container
        alignItems='center'
        direction='row'
        justify='flex-end'>
        <Grid item xs={8}>
          <Button href="#" className={classes.flex}>
            Home
      </Button>
          <Button href="#about-us" className={classes.flex}>
            About Us
      </Button>
          <Button href="#services" className={classes.flex}>
            Services
      </Button>
          <Button href="#contact-us" className={classes.flex}>
            Contact Us
      </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

HorizontalMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalMenu);