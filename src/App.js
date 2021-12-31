import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import List from "./components/list/list";

function App() {
  return (
    <Router>
      <Route path={"/"} key={"header"} component={Header} />
      <Route exact path={"/"} key={"home"} component={Home} />
      <Route exact path={"/login"} key={"login"} component={Login} />
      <Route exact path={"/list"} key={"list"} component={List} />
      <Route path={"/"} key={"footer"} component={Footer} />
    </Router>
  );
}

export default App;
