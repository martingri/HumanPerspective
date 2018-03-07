import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import Bullet from 'material-ui-icons/Lens';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function generateEducation(education, id) {
  return (<div key={id}><Typography variant="subheading" gutterBottom align="left" key={`subheading${id}`}>{education.authority}</Typography>
    <Typography variant="body1" gutterBottom align="left" key={id}>{education.degree} - {education.years}</Typography></div>);
}

function generateBullet(point, id) {
  return (<div key={id}><Typography variant="body1" gutterBottom align="left" key={id}><Bullet style={{ height: '10px' }} />{point}</Typography></div>);
}

function MemberProfile(props) {
  const { classes } = props;
  const profile = props.profile;
  const education = profile.education;
  const expertise = profile.expertise;
  const experience = profile.experience;
  const imagePath = require(`../assets/img/${profile.profileImage}`);
  return (
    <Grid container>
      <Grid item xs={4}>
        <img src={imagePath} className={classes.profileImage} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="display2" gutterBottom align='left'>
          {profile.name}
        </Typography>
        <Typography variant="subheading" gutterBottom align='left'>
          {profile.title}
        </Typography>
        <Typography variant="body1" gutterBottom align="left">
          {profile.pitch}
        </Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="display1" gutterBottom align="left">
              EDUCATION
              </Typography>
            {education.map((object, i) => generateEducation(object, i))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="display1" gutterBottom align="left">
              EXPERTISE
        </Typography>
            {expertise.map((text, i) => generateBullet(text, i))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="display1" gutterBottom align="left">
              EXPERIENCE/STRENGTHS
        </Typography>
            {expertise.map((text, i) => generateBullet(text, i))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

MemberProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberProfile);
