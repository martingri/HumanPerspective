import React from 'react';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu, { MenuItem } from 'material-ui/Menu';

class BurgerMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton 
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          aria-label="Burger Menu">
          <Icon>menu</Icon>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>About Us</MenuItem>
          <MenuItem onClick={this.handleClose}>Services</MenuItem>
          <MenuItem onClick={this.handleClose}>Contact Us</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;