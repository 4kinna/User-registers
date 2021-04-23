//import React from "react";
import AppRouter from "./components/Router";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      //"Roboto",
      //'"Helvetica Neue"',
      //"Arial",
      //"sans-serif",
      //'"Ubuntu Condensed"',
      '"Open Sans"',
      //'"Segoe UI Symbol"',
    ].join(","),
  },
});

/*AppRouter is that componant that deside what page we will land on deppending on what the user clicked on navbar */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>{<AppRouter />}</div>
    </ThemeProvider>
  );
}

export default App;
