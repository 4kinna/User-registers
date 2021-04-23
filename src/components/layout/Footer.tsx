import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

//styling for this componant
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      position: "absolute",
      right: 3,
      margin: "0px auto",
    },
    footerText: {
      fontSize: "calc(0.2rem + 1vw)",
      //fontStyle: "italic",
      color: "grey",
      opacity: "0.4",
    },
    font: {
      fontFamily: theme.typography.fontFamily,
    },
  })
);

//Structure for my footer componant
function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <footer className={classes.font}>
      <div className={classes.root}>
        <p className={classes.footerText}>By Annika Stålhandske</p>
      </div>
    </footer>
  );
}

export default Footer;
