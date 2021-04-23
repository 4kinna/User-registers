import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "../layout/List";
import { useState } from "react";
import { allUsers } from "../../models/Userlist";

//styling for this componant
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "10px auto",
      "& > *": {
        widthMax: "80%",
        height: "100%",
      },
    },
    main: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
    },
  })
);

//structure for the main section on my main page
function Center({}) {
  const classes = useStyles();
  const [users, setUsers] = useState(allUsers.Users);

  function deleteUser(username: string) {
    //console.log(username);
    setUsers(users.filter((item) => item.name !== username));
    //console.log(users);
  }

  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <div className={classes.main}>
          <List Users={users} deleteUser={deleteUser} />
        </div>
      </Paper>
    </div>
  );
}
export default Center;
