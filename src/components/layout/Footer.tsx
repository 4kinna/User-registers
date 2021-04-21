import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";

//styling for this componant
const useStyles = makeStyles({
  root: {
    position: "relative",
    bottom: 0,
    right: 3,
    margin: "0px auto",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    //fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    //color: "#fff",
    //backgroundColor: "#3f51b5 !important",
  },
});

//Structure for my footer componant
function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <BottomNavigation>
        <p>By Annika Stålhandske</p>
      </BottomNavigation>
    </div>
  );
}

export default Footer;
