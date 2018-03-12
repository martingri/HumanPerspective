import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import BurgerMenu from './components/burger-menu';
import HorizontalMenu from './components/horizontal-menu';
import Blurb from './components/blurb';
import Banner from './components/banner';
import AboutUs from './components/about-us';
import Services from './components/services';
import ContactUs from './components/contact-us';
import AppBar from 'material-ui/AppBar';

const topBannerImg = '945859-5.jpg';
const middleBannerImg = '632414.jpg';
const bottomBannerImg = '835561.jpg';

const fontWeightMedium = 500;
const theme = createMuiTheme({
  typography: {
    // Use the system font.
    display4: {
      fontFamily: 'montserrat',
      letterSpacing: '0em',
      marginRight: '1.9em',
      marginLeft: '1.9em',
      fontSize: '4.5em',
      fontWeight: '100',
    },
    display3: {
      fontFamily:'montserrat',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '2em',
      letterSpacing: '0em',
      lineHeight: '1.2em',
      color: '#001726'
    },
    display2: {
      fontFamily:'montserrat',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      letterSpacing: '.05em',
      lineHeight: '1.3em',
      textTransform: 'uppercase',
      color: '#001726'
    },
    subheading: {
      fontFamily:'montserrat',
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '0.05em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
      color: '#001726',
    },
    title: {
      fontFamily:'montserrat',
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
      color: '#001726',
    },
    body1: {
      fontFamily:'EB garamond',
      fontWeight: '300',
      wordWrap: 'break-word',
      fontStyle: 'normal',
      fontSize: '1.05em',
      letterSpacing: '.015em',
      lineHeight: '1.7em',
      textTransform: 'none',
      color: '#001726',
      paddingBottom: '1em',
    },
    button: {
      fontFamily:'montserrat',
      fontWeight: '600',
      letterSpacing: '.1em',
      fontSize: '12px',
      textTransform: 'lowercase',
      color:'#001726'
    },
    caption: {
      fontFamily: 'oswald',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '12px',
      letterSpacing: '.1em',
      lineHeight: '3em',
      textTransform: 'uppercase',
      color: '#000',
    }
  },
});

const styles = theme => ({
  root: {
    margin: 'auto',
  }
});

function Frontpage(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid style={{backgroundColor: '#f9f6f4'}} container>
          <Hidden smDown>
            <AppBar position="fixed" color="default"  elevation={0}>
              <HorizontalMenu />
            </AppBar>
          </Hidden>
          <Hidden mdUp>
          <AppBar position="fixed" color="default"  elevation={0}>
              <BurgerMenu />
            </AppBar>
          </Hidden>
          <Grid style={{padding: '0px' }} item xs={12}>
            <Banner bannerImg={topBannerImg} bannerText="Technical & product services with a human touch."  />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid style={{marginBottom: '40px' }} item xs={10} sm={8}>
            <AboutUs />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid style={{padding: '0px' }} item xs={12}>
            <Banner bannerImg={middleBannerImg} />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid item xs={10} sm={8}>
            <Services />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid style={{padding: '0px' }} item xs={12}>
            <Banner bannerImg={bottomBannerImg} />
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
    </MuiThemeProvider>
  );
}

Frontpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Frontpage);
