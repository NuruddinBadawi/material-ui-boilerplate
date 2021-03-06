import * as React from 'react';
import { IconButton, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { StyleRules } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import themeVariables from '../../lib/themeVariables';

type Props = {
  menuIconToggle: () => void;
};

const useStyle = makeStyles(
  (theme: Theme): StyleRules => {
    return {
      appBar: {
        marginLeft: themeVariables.drawer.width,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${themeVariables.drawer.width}px)`,
        },
      },
      menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
    };
  }
);

const Header = (props: Props) => {
  const classes = useStyle();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.menuIconToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
