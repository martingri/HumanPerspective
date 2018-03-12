import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import LogoImg from '../assets/img/HP-logo-green-new.svg';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  logo: {
    height: '1.5em',
    paddingTop: '.4em',
  },
});

function Logo(props) {
  const { classes } = props;

  return (
    <img src={LogoImg} className={classes.logo}/>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
