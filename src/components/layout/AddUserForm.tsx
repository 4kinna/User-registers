import { User } from "../../models/User";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState, useRef } from "react";
import { allUsers } from "../../models/Userlist";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    height: "100%",
  },
  formbox: {
    display: "flex",
    //padding: "10px",
    //margin: "1px",
    "& > *": {
      margin: "3px",
      padding: "1px",
      width: "60ch",
    },
  },
  button: {
    display: "flex",
    margin: "10px",
    alignItems: "center",
  },
});

interface UserUIProps {
  user: User;
}

function AddUser() {
  const classes = useStyles();
  let userInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [info, setInfo] = useState({
    name: "",
    companyName: "",
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
      companyName: "",
      email: "",
      phone: "",
      img: "",
    });
  }

  function handleAddingUser() {
    console.log(info);

    const newUser: User = {
      name: info.name,
      companyName: info.companyName,
      email: info.email,
      phone: info.phone,
      profilePicture: info.img,
    };

    allUsers.Users.push(newUser);
  }

  return (
    <>
      <Card>
        <div className={classes.root}>
          <div className={classes.formbox}>
            <form id="addUserForm">
              <TextField
                id="name"
                ref={userInput}
                label="Namn:"
                onChange={(event) => handleChange(event)}
                value={info.name}
              />
              <TextField
                id="companyName"
                label="Company:"
                onChange={(event) => handleChange(event)}
                value={info.companyName}
              />
              <TextField
                id="email"
                label="Email:"
                onChange={(event) => handleChange(event)}
                value={info.email}
              />
              <TextField
                id="phone"
                label="Phone:"
                onChange={(event) => handleChange(event)}
                value={info.phone}
              />
              <TextField
                id="img"
                label="Image:"
                onChange={(event) => handleChange(event)}
                value={info.img}
              />

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
            </form>
          </div>
        </div>
      </Card>
    </>
  );
}

export default AddUser;
