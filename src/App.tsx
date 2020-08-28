import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {
  spring,
  AnimatedRoute,
  AnimatedSwitch,
} from "./components/plugins/react-router-transition";
import { HomePage } from "./components/pages/HomePage";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { HomePageProvider } from "./components/models/HomeContext";
import { cyan } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: cyan,
  },
});
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <HomePageProvider>
          <Router>
            <Route exact path="/" component={HomePage} />
            <CssBaseline />
          </Router>
        </HomePageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
