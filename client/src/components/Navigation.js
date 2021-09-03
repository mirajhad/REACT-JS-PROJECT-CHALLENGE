import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SearchForm from "./SeacrhForm";

class Navigation extends Component {
  /* Push search term to the URL bar */
  handleRoute = (query) => {
    this.props.history.push(`/search/${query}`);
    
  };

  render() {
    /* onSearch call handleRoute function */
    return (
      <nav className="main-nav text-center">
        <SearchForm onSearch={this.handleRoute} />
        <br />
        <br />
        <NavLink className="btn btn-primary" to="/search/Mountain">
          Mountain
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink className="btn btn-primary" to="/search/Beaches">
          Beaches
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink className="btn btn-primary" to="/search/Birds">
          Birds
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink className="btn btn-primary" to="/search/Food">
          Food
        </NavLink>
      </nav>
    );
  }
}

export default withRouter(Navigation);
