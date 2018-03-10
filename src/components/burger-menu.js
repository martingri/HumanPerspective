import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "material-ui/Button";
import { MenuItem, MenuList } from "material-ui/Menu";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grid from "material-ui/Grid";
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class BurgeMenu extends React.Component {
  state = {
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    // setTimeout to ensure a close event comes after a target click event
    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Grid
          container
          alignItems="flex-end"
          direction="column"
          justify="flex-start"
        >
          <Grid item>
            <Manager>
              <Target>
                <IconButton
                  aria-owns={open ? "menu-list" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  aria-label="Burger Menu"
                >
                  <Icon>menu</Icon></IconButton>
              </Target>
              <Popper
                placement="right-start"
                eventsEnabled={open}
                className={classNames({ [classes.popperClose]: !open })}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow
                    in={open}
                    id="menu-list"
                    style={{ transformOrigin: "0 0 0" }}
                  >
                    <Paper>
                      <MenuList role="menu">
                        <Grid container
                          alignItems='flex-start'
                          direction='column'
                          justify='flex-start'>
                        <Button href="#" onClick={this.handleClose}>
                          Home
              </Button>
                        <Button href="#about-us" onClick={this.handleClose}>
                          About Us
              </Button>
                        <Button href="#services" onClick={this.handleClose}>
                          Services
              </Button>
                        <Button href="#contact-us" onClick={this.handleClose}>
                          Contact Us
              </Button>
              </Grid>
                      </MenuList>
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </Popper>
            </Manager>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BurgerMenu;