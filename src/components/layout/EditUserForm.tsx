import { User } from "../../models/User";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { allUsers } from "../../models/Userlist";
import { Redirect, useParams } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { getUser, putUser } from "../API";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      padding: "10px",
      margin: "10px",
    },
    formbox: {
      display: "flex",
      "& > *": {
        margin: "3px",
        padding: "1px",
      },
    },
    button: {
      display: "flex",
      margin: "10px",
      alignItems: "center",
    },
    myInput: {
      padding: "5px",
      margin: "10px",
      fontSize: "calc(0.4rem + 1vw)",
    },
    buttonContainer: {
      display: "flex;",
    },
    font: {
      fontFamily: theme.typography.fontFamily,
    },
  })
);

interface myParam {
  userId: string;
}

function EditUser() {
  const classes = useStyles();
  const [editUser, setEditUser] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    img: "",
  });

  //create varible to URL parmameter (emailn)
  const { userId } = useParams<myParam>();
  //after render we want to få find matching email and setInfo to the objects values, so we can present the current values in are edit Form
  useEffect(() => {
    getUser(userId).then((data) => {
      setInfo({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        img: data.profilePicture,
      });
    });
  }, []);

  //Function to handle change on the users values
  function handleChange(event: any) {
    setInfo({ ...info, [event.target.id]: event.target.value });
    console.log(info);
  }

  //Function to handel if any one click usdate
  function saveUserUpdates(e: any) {
    //creating new user
    const updaterUser: User = {
      userId: userId,
      name: info.name,
      company: info.company,
      email: info.email,
      phone: info.phone,
      profilePicture: info.img,
    };

    putUser(userId, updaterUser);

    // setAddUser to true to trigger our inline if-statement in our return
    setEditUser(true);
  }
  //function to abort editing, by giving setEditUser to true we will call the inline statement bellow and redirect to main page
  function goback() {
    setEditUser(true);
  }

  return (
    <>
      {/* inline ifstatement if addUser is true ? redirect :(else) show card with list */}
      {editUser ? (
        <Redirect to={"/"} />
      ) : (
        <div className={classes.root}>
          <Card className={classes.font}>
            <div className={classes.root}>
              <div className={classes.formbox}>
                <form>
                  <TextField
                    className={classes.myInput}
                    id="name"
                    label="Namn:"
                    onChange={(event) => handleChange(event)}
                    value={info.name}
                  />
                  <TextField
                    className={classes.myInput}
                    id="company"
                    label="Company:"
                    onChange={(event) => handleChange(event)}
                    value={info.company}
                  />
                  <TextField
                    className={classes.myInput}
                    id="email"
                    label="Email:"
                    onChange={(event) => handleChange(event)}
                    value={info.email}
                  />
                  <TextField
                    className={classes.myInput}
                    id="phone"
                    label="Phone:"
                    onChange={(event) => handleChange(event)}
                    value={info.phone}
                  />
                  <TextField
                    className={classes.myInput}
                    id="img"
                    label="Image:"
                    onChange={(event) => handleChange(event)}
                    value={info.img}
                  />
                  <div className={classes.buttonContainer}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      id="add"
                      onClick={(e) => saveUserUpdates(e)}
                    >
                      Updates
                    </Button>

                    <Button
                      className={classes.button}
                      variant="contained"
                      id="add"
                      onClick={() => goback()}
                    >
                      Go Back
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

export default EditUser;
