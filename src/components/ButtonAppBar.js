import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from './MenuList.js';

const styles = theme => ({
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
  },
  popperClose: {
    pointerEvents: 'none'
  }
});

class ButtonAppBar extends Component {
  render() {
    const { classes } = this.props;

    const homeItems = [
      { name: 'Home' },
      { name: 'About Us' },
      { name: 'Newsletter' },
      { name: 'Cancellations' }
    ];
    const mediaItems = [{ name: 'Pictures' }, { name: 'Vides' }];
    const companyItems = [
      { name: 'Our Company' },
      { name: 'Performances' },
      { name: 'Request a Show' },
      { name: 'Meet the Members' },
      { name: 'Company Login' }
    ];
    const classesItems = [
      { name: 'Class Schedules' },
      { name: 'Vacation Schedule' },
      { name: 'Class Descriptions' },
      { name: 'Fitness Classes' },
      { name: 'Other Classes' },
      { name: 'Age Requirements' },
      { name: 'Summer Classes' },
      { name: 'Summer Dance Camp' },
      { name: 'Tuition Costs' },
      { name: 'Studio Handbook & Policy' },
      { name: 'Sign-Up Forms' },
      { name: 'Online Sign-Up' },
      { name: 'Note Regarding Dance With Me, Baby, and Preschool Classes' }
    ];

    const infoItems = [
      { name: 'Directions' },
      { name: 'Staff' },
      { name: 'Recital Information' },
      { name: 'Dance Resources' },
      { name: 'Sponsors' },
      { name: 'Surveys' },
      { name: 'Sign-Up Forms' }
    ];
    const contactItems = [{ name: 'Contact' }];
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.flex}>
              <MenuList name="Home" items={homeItems} />
              <MenuList name="media" items={mediaItems} />
              <MenuList name="Company" items={companyItems} />
              <MenuList name="Classes" items={classesItems} />
              <MenuList name="Information" items={infoItems} />
              <MenuList name="Contact" items={contactItems} />
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
