import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//styling for this componant
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

//Structure for navbar componant
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            User registers
          </Typography>
          <Button color="inherit" id="addUser">
            Add User
          </Button>
          <Button color="inherit" id="listUsers">
            List User
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
