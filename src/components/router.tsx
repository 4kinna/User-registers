import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/pages/Main";
import AddUserPage from "../components/pages/AddUserPage";
import EditUserPage from "../components/pages/EditUserPage";

//Addresses to reroute to
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={AddUserPage} exact path="/adduser" />
        <Route component={EditUserPage} exact path="/edituser/:userId" />
      </Switch>
    </Router>
  );
}
export default AppRouter;
