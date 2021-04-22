import UserUI from "../common/UserUI"; //UI komponent = <User/>
import { User } from "../../models/User";
import { Userlist } from "../../models/Userlist";

interface listProps {
  deleteUser(username: string): void;
  Users: User[];
}

// List Loops true allUsers.Users by using map and presents the outcome i Center.tsx
function List(props: listProps) {
  const { Users, deleteUser } = props;

  return (
    <>
      {Users.map((user: User, key: number) => {
        return <UserUI key={key} user={user} deleteUser={deleteUser} />;
      })}
    </>
  );
}
export default List;
