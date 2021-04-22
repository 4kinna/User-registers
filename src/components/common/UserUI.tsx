import { User } from "../../models/User"; //{} is used when we can export multiple values from a componant
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

//styling for this componant
const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "10px",
    margin: "auto",
  },
  head: {
    display: "flex",
    flexDirection: "column",
  },
  center: {
    padding: "10px",
    margin: "auto",
    fontSize: "calc(0.4rem + 1vw)",
  },
  img: {
    maxWidth: "100px",
    //maxHeight: "auto",
    padding: "10px",
    borderRadius: "10%",
  },
});

//Interface of the type user?
//is needet to  be able to use the user valus in our function UserUI
interface UserUIProps {
  user: User;

  deleteUser(username: string): void;
}
// structure for how we will present are list of users and with what values
function UserUI(props: UserUIProps) {
  const classes = useStyles();
  const { user, deleteUser } = props;

  return (
    <>
      <Card>
        <div className={classes.root}>
          <div className={classes.head}>
            <h3>{user.name}</h3>
            <img className={classes.img} src={user.profilePicture} />
          </div>
          <div className={classes.center}>
            <p>Company; {user.companyName}</p> <p>Email; {user.email}</p>{" "}
            <p>Phone; {user.phone}</p>
          </div>
          {/* <EditIcon onClick={() => editUser(user.name)} /> */}
          <Typography>Delete</Typography>
          <DeleteIcon onClick={() => deleteUser(user.name)} />
        </div>
      </Card>
    </>
  );
}
export default UserUI;
