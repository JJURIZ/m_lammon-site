import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"; // imports option to make custom styles
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';



function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// import About from "./About";
// Function to create custom Material UI styles
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: "black",
    transition: ".2s",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
      textDecoration: "none",
      padding: "16px 10px",
    },
  },
}));

function Header(props) {
  const classes = useStyles(); // allows use of custom styles on page
  return (
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
        <Typography className={classes.menuButton} variant="h6">
            <Link className={classes.menuButton} to="/">Home</Link>
          </Typography>
          <Typography className={classes.menuButton} variant="h6">
            <Link className={classes.menuButton} to="/profile">Profile</Link>
          </Typography>
          <Typography className={classes.menuButton} variant="h6">
            <Link className={classes.menuButton} to="/books">Books</Link>
          </Typography>
          <Typography className={classes.menuButton} variant="h6">
            <Link className={classes.menuButton} to="/poems-essays-more">
              Poems, Essays, and More
            </Link>
          </Typography>
          <Typography className={classes.menuButton} variant="h6">
            <Link className={classes.menuButton} to="/about">
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    <Toolbar />

  </React.Fragment>
  );
}

export default Header;
