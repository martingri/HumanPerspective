import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
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

const topBannerImg = '835561.jpg';
const middleBannerImg = '703700.jpg';
const bottomBannerImg = '632414.jpg';

const fontWeightMedium = 500;
const theme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily:
      'inconsolata',
    fontWeightMedium,
    body1: {
      fontWeight: fontWeightMedium,
      wordWrap: 'break-word',
      fontWeight: fontWeightMedium,
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.015em',
      lineHeight: '2.3em',
      textTransform: 'none',
      color: '#949494'
    },
    subheading: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.9em',
      textTransform: 'uppercase',
      color: '#949494'
    },
    title: {
      fontWeight: fontWeightMedium,
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '.1em',
      lineHeight: '1.9em',
      textTransform: 'uppercase',
      color: '#000'
    },
    display2: {
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '26px',
      letterSpacing: '.15em',
      lineHeight: '2.3em',
      textTransform: 'uppercase'
    },
    display1: {
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '26px',
      letterSpacing: '.15em',
      lineHeight: '2.3em',
      textTransform: 'uppercase',
      color: '#121212'
    },
    button: {
      fontFamily: 'oswald'
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
    <MuiThemeProvider theme={theme}>
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
            <Banner bannerImg={topBannerImg} bannerText="COMMITTED TO SOCIAL IMPACT" />
          </Grid>
          <Grid item xs={1} sm={2}>
          </Grid>
          <Grid item xs={10} sm={8}>
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
