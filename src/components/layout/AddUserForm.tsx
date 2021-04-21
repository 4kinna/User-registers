import Card from "@material-ui/core/Card";
import { User } from "../../models/User";
import { allUsers } from "../../models/Userlist";

interface UserUIProps {
  user: User;
}

document.getElementById("addUser")?.addEventListener("click", addToAllUsers);

function AddUser(props: UserUIProps) {
  const { user } = props;

  // här ska jag lägga funktionerna som ska updatera listan näs en ny användare läggs till!

  //   document.getElementById("add")?.addEventListener("click", addToAllUsers);

  //   function addToAllUsers() {
  //     allUsers.Users.push();
  //     //document.getElementById("activUsers").innerHTML = allUsers.Users;
  //   }

  return (
    <>
      <Card>
        <div>
          <form id="addUserForm">
            <label>Name:</label>
            <input id="name" type="text" value={user.name} />
            <label>Company:</label>
            <input id="companyName" type="text" value={user.companyName} />
            <label>Email:</label>
            <input id="email" type="email" value={user.email} />
            <label>Phonenumber:</label>
            <input id="phone" type="phone" value={user.phoneNumber} />

            <button id="add">Add User</button>
          </form>
        </div>
      </Card>
    </>
  );
}

export default AddUser;
