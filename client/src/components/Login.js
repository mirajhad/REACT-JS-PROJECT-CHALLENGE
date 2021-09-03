import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("successful login");
      history.push("/Home");
    }
  };

  return (
    <>
      <section id="cover">
        <br />
        <br />
        <br />
        <div id="cover-caption">
          <div id="container" className="container">
            <div className="row">
              <div className="col-sm-10 offset-sm-1 text-center bg-secondary">
                <h1 className="display-3">
                  <b>WELCOME TO LOGIN PAGE</b>
                </h1>
                <br />
                <div className="form-control">
                  <form method="POST" className="imputForm">
                    <br />
                    <div className="form-group">
                      <label className="sr-only">
                        <b>EMAIL: </b>
                      </label>
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label className="sr-only">
                        &nbsp;&nbsp;<b>PASSWORD: </b>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <br />
                    <input
                      className="btn btn-primary"
                      type="submit"
                      name="signup"
                      id="signup"
                      value="Log In"
                      onClick={loginUser}
                    />
                  </form>
                  <br />
                  <br />
                  <NavLink className="text-danger" to="/Signup">
                    Signup Here
                  </NavLink>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
