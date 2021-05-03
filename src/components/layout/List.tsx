import UserUI from "../common/UserUI"; //UI komponent = <User/>
import { User } from "../../models/User";

//interface is a blueprint that holds a function deleteUser of datatype string,(return void =nothing) and also a Users of the datatype user[]
interface listProps {
  deleteUser(username: string): void;
  Users: User[];
}

//List function takes in listProps and Loops true Users by using map and return the objekt to UserUI that will hold the UI design.
function List(props: listProps) {
  const { Users, deleteUser } = props;

  return (
    <>
      {Users.map((user: User, key: number) => {
        return (
          <UserUI
            key={key}
            user={user}
            deleteUser={deleteUser}
            name={"Anton"}
          />
        );
      })}
    </>
  );
}
export default List;
