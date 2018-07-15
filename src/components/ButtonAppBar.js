import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ClickAwayListener } from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuList from './MenuList';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none'
  }
};

class ButtonAppBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
              <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
              <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
            </Menu>

            <div className={classes.flex}>
              <Button
                color="inherit"
                aria-label="Menu"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                Home
              </Button>
              <ClickAwayListener onClickAway={this.handleClose}>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
                  <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
                  <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
                </Menu>
              </ClickAwayListener>
              <Button
                color="inherit"
                aria-label="Menu"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                Media
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
                <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
                <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
              </Menu>

              <Button color="inherit">Company</Button>
              <MenuList />
              <Button color="inherit">Classes</Button>
              <Button color="inherit">Information</Button>
              <Button color="inherit">Contact</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
