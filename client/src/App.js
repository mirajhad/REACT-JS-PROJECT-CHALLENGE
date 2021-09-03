import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
    </div>
  );
};
export default App;
