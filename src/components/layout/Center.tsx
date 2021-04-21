import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "../layout/List";
import { Height } from "@material-ui/icons";

//styling for this componant
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",

      "& > *": {
        widthMax: "80%",
        Height: "100%",
      },
    },
  })
);

//structure for the main section on my main page
function Center({}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div>
          <List />
        </div>
      </Paper>
    </div>
  );
}
export default Center;
