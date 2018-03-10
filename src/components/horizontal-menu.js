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
  }
});

function HorizontalMenu(props) {
  const { classes } = props;
  return (
    <Toolbar>
      <Grid container
        alignItems='center'
        direction='row'
        justify='flex-start'>
        <Grid item xs={1}>
          <Logo />
        </Grid>
      </Grid>
      <Grid container
        alignItems='center'
        direction='row'
        justify='flex-end'>
        <Button href="#">
          Home
        </Button>
        <Button href="#about-us">
          About Us
        </Button>
        <Button href="#services">
          Services
        </Button>
        <Button href="#contact-us">
          Contact Us
        </Button>
      </Grid>
    </Toolbar>
  );
}

HorizontalMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalMenu);