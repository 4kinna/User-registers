import Navbar from "../layout/Navbar";
import EditUser from "../layout/EditUserForm";
import Footer from "../layout/Footer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

//styling for this componant
const useStyles = makeStyles({
  root: {
    margin: "10px auto",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",

    "& > *": {
      widthMax: "80%",
      height: "100%",
    },
  },
});

//holds my structure for the edit page
function EditUserPage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.main}>
            <EditUser />
          </div>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default EditUserPage;
