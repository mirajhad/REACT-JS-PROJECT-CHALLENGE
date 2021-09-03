import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;

  if (results.length) {
    photos = results.map((photo) => (
      <Photo
        key={photo.id}
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
    ));
    return (
      <div id="" className="text-center">
        <br />
        <h2>RESULTS FOR {props.queryFromParent}</h2>
        <br />
        {photos}
      </div>
    );
  } else {
    /*IF NOT RESULT FOUND */
    return (
      <div id="photo-container">
        <NotFound />
      </div>
    );
  }
};

export default PhotoContainer;
