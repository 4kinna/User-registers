//import React from "react";
import Main from "./components/pages/Main";
import AppRouter from "./components/Router";

/*AppRouter is that componant that deside what page we will land on deppending on what the user clicked on navbar */
function App() {
  return <div>{<AppRouter />}</div>;
}

export default App;
