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
  profileImage: {
    float:'left',
    paddingRight: '30px',
    paddingBottom: '10px',
    paddingTop: '20px',
    width: '300px'
  }
});

function generateEducation(education, id) {
  return (<div key={id}><Typography variant="subheading" gutterBottom align="left" key={`subheading${id}`}>{education.authority}</Typography>
    <Typography variant="body1" gutterBottom align="left" key={id}>{education.degree} - {education.years}</Typography></div>);
}

function generateBullet(point, id) {
  return (<div key={id}><Typography style={{ paddingBottom: '0px' }} variant="body1" gutterBottom align="left" key={id}><Bullet style={{ height: '10px' }} />{point}</Typography></div>);
}

function generatePitchParagraph(text, id) {
  return (<div><Typography key={id} variant="body1" gutterBottom align="left">
           {text}
          </Typography></div>);
}

function MemberProfile(props) {
  const { classes } = props;
  const profile = props.profile;
  const education = profile.education;
  const expertise = profile.expertise;
  const experience = profile.experience;
  const pitch = profile.pitch;
  const imagePath = require(`../assets/img/${profile.profileImage}`);
  return (
    <Grid container>
      <Grid item xs={12}>
        <img src={imagePath} className={classes.profileImage}/>
        <Typography variant="display3" gutterBottom align='left'>
          {profile.name}
        </Typography>
        <Typography variant="subheading" gutterBottom align='left'>
          {profile.title}
        </Typography>
        {pitch.map((text, i) => generatePitchParagraph(text, i))}
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="display2" gutterBottom align="left">
              EDUCATION
              </Typography>
            {education.map((object, i) => generateEducation(object, i))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="display2" gutterBottom align="left">
              EXPERTISE
        </Typography>
            {expertise.map((text, i) => generateBullet(text, i))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="display2" gutterBottom align="left">
              EXPERIENCE & STRENGTHS
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
