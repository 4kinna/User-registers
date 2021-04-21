import Navbar from "../layout/Navbar";
import AddUser from "../layout/AddUserForm";
import Footer from "../layout/Footer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps, withRouter } from "react-router-dom";

//styling for this componant
const useStyles = makeStyles({
  root: {
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

//Main holds my structure for the main page
const AddUserPage: React.FunctionComponent<RouteComponentProps<any>> = (
  props
) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div>
        <Paper elevation={3}>
          <div className={classes.root}>
            <AddUser />
          </div>
        </Paper>
      </div>
      <Footer />
    </div>
  );
};

export default AddUserPage;
