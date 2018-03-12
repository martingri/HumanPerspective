import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import MemberProfile from './member-profile';
import martinProfileImage from '../assets/img/MartinGrimelandCV-scaled.png';
import profiles from '../assets/data/profiles.json';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

function getMemberProfileComponent(profile, id) {
  return (<Grid item xs={12} key={id}>
    <MemberProfile profile={profile} key={id} />
  </Grid>);
}

function AboutUs(props) {
  const { classes } = props;
  return (
    <Grid container id="about-us">
      <Grid item xs={12}>
        <Typography variant="display3" gutterBottom align='center' style={{ marginTop: '40px' }}>
          About us
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          Human Perspective works on web and native applications that are made for humans and have a positive social impact. We develop our own concepts and work with like minded businesses on their products. With extensive experience shaping, designing and building ground-breaking new products our expertise is product design and concept development. Human Perspective is based in Newcastle, Australia with strong connections to Oslo, Norway and London, UK.</Typography>
        <Typography variant="body1" gutterBottom align="left">
          We believe in lean product development principles and that great communication is essential for a successful project. When we’re involved in projects that requires a bigger team or specialists, we scale up the team with professionals in our network who we know and trust.
        </Typography>
      </Grid>
      {profiles.map((profile, i) => getMemberProfileComponent(profile, i))}
    </Grid>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
