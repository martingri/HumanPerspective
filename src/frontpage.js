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

const topBannerImg = '945859-binoculars.jpg';
const middleBannerImg = '703700.jpg';
const bottomBannerImg = '632414.jpg';

const fontWeightMedium = 500;
const theme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily:
      'quicksand',
    fontWeightMedium,
    fontFamily:
    'asap',
    display4: {
      fontFamily: 'asap',
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      marginRight: '1.9em',
      marginLeft: '1.9em',
      fontSize: '60px'
    },
    display3: {
      fontFamily:'quicksand',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '26px',
      letterSpacing: '.15em',
      lineHeight: '2.3em',
      textTransform: 'uppercase',
      color: 'black'
    },
    display2: {
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '18px',
      letterSpacing: '.15em',
      lineHeight: '1.8em',
      textTransform: 'uppercase',
      color: '#000'
    },
    subheading: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
      color: '#949494',
    },
    title: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.em',
      textTransform: 'uppercase',
    },
    body1: {
      fontWeight: fontWeightMedium,
      wordWrap: 'break-word',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.015em',
      lineHeight: '2.3em',
      textTransform: 'none',
      color: '#949494',
      paddingBottom: '1em',
    },
    button: {
    
      fontWeight: '600',
      letterSpacing: '.1em',
      fontSize: '12px',
      textTransform: 'lowercase',
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
      WebkitFontSmoothing: 'subpixel-antialiased'
    }
  },
});

const styles = theme => ({

});

function Frontpage(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Hidden smDown>
            <AppBar position="sticky" color="default">
              <HorizontalMenu />
            </AppBar>
          </Hidden>
          <Hidden mdUp>
          <AppBar position="sticky" color="default">
              <BurgerMenu />
            </AppBar>
          </Hidden>
          <Grid item xs={12}>
            <Banner bannerImg={topBannerImg} bannerText="TECHNICAL AND PRODUCT SERVICES" />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid style={{marginBottom: '40px' }} item xs={10} sm={8}>
            <AboutUs />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid item xs={12}>
            <Banner bannerImg={middleBannerImg} />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid item xs={10} sm={8}>
            <Services />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid item xs={12}>
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
