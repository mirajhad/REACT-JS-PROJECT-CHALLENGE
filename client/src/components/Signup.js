import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState([]);
  const { handleSubmit } = useForm();

  function handelname(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handelemail(e) {
    setUser({ ...user, email: e.target.value });
  }
  function handelpass(e) {
    setUser({ ...user, password: e.target.value });
  }

  function mydata(e) {
    console.log(user);
    postdataserver(user);
  }

  function mypage() {
    window.location.href = "/login";
  }
  const postdataserver = async (data) => {
    axios
      .post(`/register`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(
        (response) => {
          console.log("sucess");
          alert("Registration successfull");
          window.setTimeout(mypage(), 1000);
          mypage();
        },
        (err) => {
          console.log(err.response);
          console.log(err, err.response);
          console.log("error");
        }
      );
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
                  <b>WELCOME TO REGISTRATION PAGE</b>
                </h1>
                <br />
                <div className="form-control">
                  <form onSubmit={handleSubmit(mydata)} className="imputForm">
                    <br />
                    <div className="form-group">
                      <label className="sr-only">
                        <b>NAME: </b>
                      </label>
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="name"
                        name="name"
                        id="name"
                        onChange={handelname} 
                        placeholder="Enter Your Name"
                      />
                    </div>
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
                        onChange={handelemail}
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
                        onChange={handelpass}
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <br />
                    <input
                      className="btn btn-primary"
                      type="submit"
                      name="signup"
                      
                    />
                  </form>
                  <br />
                  <br />
                  <NavLink className="text-danger" to="/login">
                    Login Here
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
}