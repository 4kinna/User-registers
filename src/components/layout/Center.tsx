import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "10px",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(80),
      },
    },
  })
);

function Center({}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} />
    </div>
  );
}
export default Center;
