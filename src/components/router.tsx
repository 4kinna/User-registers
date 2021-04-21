import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../components/pages/Main";
import AddUserPage from "../components/pages/AddUserPage";

//Addresses to reroute to
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={AddUserPage} exact path="/adduser" />
      </Switch>
    </Router>
  );
}
export default AppRouter;
