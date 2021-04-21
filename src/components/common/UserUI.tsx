import { User } from "../../models/User"; //{} is used when we can export multiple values from a componant
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

//Interface of the type user?
//is needet to  be able to use the user valus in our function UserUI
interface UserUIProps {
  user: User;
}

//styling for this componant
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "10px",
      margin: "10px",
    },
    head: {
      display: "flex",
      //flexDirection: "row",
    },
    img: {
      maxWidth: "100px",
      maxHeight: "auto",
      padding: "10px",
    },
  })
);

// structure for how we will present are list of users and with what values
function UserUI(props: UserUIProps) {
  const classes = useStyles();
  const { user } = props;
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.head}>
          <img className={classes.img} src={user.profilePicture} />
          <h3>{user.name}</h3>
          <div>
            <p>Company;{user.companyName}</p> <p>Email;{user.email}</p>{" "}
            <p>
              Phonenumber;
              {user.phoneNumber}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
export default UserUI;
