import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles' // imports option to make custom styles
import MenuIcon from '@material-ui/icons/Menu'

// Function to create custom Material UI styles
const useStyles = makeStyles({
    helloThereStyles: {
        fontStyle: 'oblique'
    }
});

function Header() {
    const classes = useStyles(); // allows use of custom styles on page
    return (
        <header className="App-header">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className={classes.helloThereStyles} // GOING TO NEED TO CHANGE THIS
                        variant="h6">
                        About
                    </Typography>
                    <Button color="inherit">home</Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;