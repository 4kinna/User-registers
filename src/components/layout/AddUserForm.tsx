import { User } from "../../models/User";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { allUsers } from "../../models/Userlist";
import { Redirect } from "react-router-dom";

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
        //height: "100%",
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

interface UserUIProps {
  user: User;
}

function AddUser() {
  const classes = useStyles();

  const [addedUser, setAddedUser] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    img: "",
  });

  function handleChange(event: any) {
    setInfo({ ...info, [event.target.id]: event.target.value });
    //console.log(info);
  }

  function handleReset() {
    setInfo({
      name: "",
      company: "",
      email: "",
      phone: "",
      img: "",
    });
  }
  //Function to handel if anny one click add user
  function handleAddingUser() {
    //console.log(info);

    const newUser: User = {
      name: info.name,
      company: info.company,
      email: info.email,
      phone: info.phone,
      profilePicture: info.img,
    };
    // push up newUser to are Aray allUsers.Users
    allUsers.Users.push(newUser);
    // setAddUser to true to trigger our inline if-statement in our return
    setAddedUser(true);
  }

  return (
    <>
      {/* inline ifstatement if addUser is true ? redirect :(else) show card with list */}
      {addedUser ? (
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
                      onClick={() => handleAddingUser()}
                    >
                      Add User
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      id="reset"
                      onClick={() => handleReset()}
                    >
                      Reset
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

export default AddUser;
