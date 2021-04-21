import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//styling for this componant
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    borderRadius: "4px",
  },
  title: {
    flexGrow: 1,
  },
  myToolbar: {
    flexDirection: "column",
  },
  "@media (min-width: 700px)": {
    myToolbar: {
      flexDirection: "row",
    },
  },
});

//Structure for navbar componant
function Navbar() {
  const classes = useStyles();

  //On button were using Link from React-router-dom to redirect user depending on what the clicked on */
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.myToolbar}>
          <Typography className={classes.title}>User registers</Typography>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/adduser">
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
