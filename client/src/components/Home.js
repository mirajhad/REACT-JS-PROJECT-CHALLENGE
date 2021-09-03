import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import fourZeroFour from "../components/fourZeroFour";
import { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <h1 className="text-center"> WELCOME {userName}</h1>
      <Router>
        <Navigation />
        <div className="text-center ">
          <Switch>
            <Route exact path="/search/:query" component={Container} />
            <Route path="*" component={fourZeroFour} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Home;
