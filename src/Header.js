import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"; // imports option to make custom styles
import { Link } from "react-router-dom";

import About from "./About";
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

function Header() {
  const classes = useStyles(); // allows use of custom styles on page
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
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
    </header>
  );
}

export default Header;
