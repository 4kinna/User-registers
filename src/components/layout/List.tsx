import { allUsers } from "../../models/Userlist";
import UserUI from "../common/UserUI"; //UI komponent = <User/>
import { User } from "../../models/User";

// List Loops true allUsers.Users by using map and presents the outcome i Center.tsx
function List() {
  return (
    <>
      {allUsers.Users.map((user: User, key: number) => {
        return <UserUI key={key} user={user} />;
      })}
    </>
  );
}
export default List;
