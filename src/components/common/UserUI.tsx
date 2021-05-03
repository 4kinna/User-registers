import { User } from "../../models/User"; //{} is used when we can export multiple values from a componant
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

//styling for this componant
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      display: "flex",
      margin: "10px",
      //width: "100vf",
    },
    center: {
      padding: "5px",
      margin: "auto",
      fontSize: "calc(0.4rem + 1vw)",
      "& p": {
        margin: "3px !important",
        fontSize: "calc(0.2rem + 1vw)",
      },
    },
    img: {
      maxWidth: "100px",
      //maxHeight: "200px",
      padding: "10px",
      borderRadius: "10%",
    },
    myButtons: {
      cursor: "pointer",
      margin: "10px",
      padding: "5px",
      //display: "flex",
      //flexDirection: "column",
      //position: "absolute",
      //right: 3,
    },
    font: {
      fontFamily: theme.typography.fontFamily,
    },
    fullHeightCard: {
      width: "100%",
      margin: "10px",
    },
  })
);

//Interface is a blueprint for all the valus we like to take with ous in to our function UserUI
interface UserUIProps {
  user: User;
  deleteUser(username: string): void;
  name: string;
}
// structure for how we will present are list of users and with what values
function UserUI(props: UserUIProps) {
  const classes = useStyles();
  const { user, deleteUser } = props;

  return (
    <>
      <Card className={classes.fullHeightCard}>
        <div className={classes.font}>
          <div className={classes.root}>
            <img className={classes.img} src={user.profilePicture} />

            <div className={classes.center}>
              <h3>{user.name}</h3>
              <p>Company; {user.companyName}</p> <p>Email; {user.email}</p>{" "}
              <p>Phone; {user.phone}</p>
            </div>
            <div className={classes.myButtons}>
              <IconButton component={Link} to={`/edituser/${user.email}`}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  color="secondary"
                  onClick={() => deleteUser(user.name)}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
export default UserUI;
