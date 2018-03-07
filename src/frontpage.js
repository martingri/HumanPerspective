import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Logo from './components/logo';
import BurgerMenu from './components/burger-menu';
import HorizontalMenu from './components/horizontal-menu';
import Blurb from './components/blurb';
import Banner from './components/banner';
import AboutUs from './components/about-us';
import Services from './components/services';
import ContactUs from './components/contact-us';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Frontpage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={10} sm={2}>
          <Logo />
        </Grid>
        <Hidden smUp>
          <Grid item xs={2}>
          <BurgerMenu />
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item sm={8}>
            <HorizontalMenu />
          </Grid>
          <Grid item sm={2}>
            <Blurb />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={10} sm={8}>
          <AboutUs />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Services />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={10} sm={8}>
          <ContactUs />
        </Grid>
        <Grid item xs={1} sm={2}>
        </Grid>
      </Grid>
    </div>
  );
}

Frontpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Frontpage);
