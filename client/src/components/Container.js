import React, { Component } from "react";
import axios from "axios";
import apiKey from "../config";
import PhotoContainer from "./PhotoContainer";

class Container extends Component {
  /* Set states for when photos are returned and when page is reloading */
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  /* When the component mounts search for photos */
  componentDidMount() {
    this.searchForPhotos(this.props.match.params.query);
    this.props.history.listen((location) =>
      this.searchForPhotos(location.pathname.slice(8))
    );
  }

  /* Send the search query to the Flickr API and get results */
  searchForPhotos = (query = "bears") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=12&sort=relevance&format=json&nojsoncallback=1`
      )

      /* When results are received loading stops */
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
        });
      })
      /* Any errors get logged to the console */
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  render() {
    /* When loading render 'Loading...' to the page or render results */
    return (
      <ul>
        {this.state.loading ? (
          <h2>Loading ...</h2>
        ) : (
          <PhotoContainer
            data={this.state.photos}
            queryFromParent={this.props.match.params.query}
          />
        )}
      </ul>
    );
  }
}

export default Container;
