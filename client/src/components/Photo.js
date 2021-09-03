import React from "react";

/* IMG takes URL prop constructed from PhotoContainer.js */
const Photo = (props) => (
  <img
    style={{width:"400px", height:"400px"}}
    className="img-fluid img-thumbnail img-responsive bg-dark"
    src={props.url}
    alt=""
  />
);

export default Photo;
