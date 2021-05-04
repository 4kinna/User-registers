import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "../layout/List";
import { useState, useEffect } from "react";
import { allUsers } from "../../models/Userlist";
import { User } from "../../models/User";
import { getUsers, deleteUser } from "../API";

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
  const [users, setUsers] = useState([]);

  //function to remove specific User
  function removeUser(userId: string) {
    deleteUser(userId);
    setUsers(users.filter((u: User) => u.userId !== userId));
  }

  //när component renderas (körs den engång) sen körs getUsers
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <div className={classes.main}>
          <List Users={users} removeUser={removeUser} />
        </div>
      </Paper>
    </div>
  );
}
export default Center;
