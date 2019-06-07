import React, { Component } from "react";
import axios from "axios";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    axios.get("./api.json").then(({ data }) => {
      console.log(data.rows);
      this.setState({
        images: data.rows
      });
    });
  }

  render() {
    const { images } = this.state;
    console.log("these are my images: ", images);
    return (
      <section className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={image.org.concat(index)}>
            <img src={image.image} alt={image.tag} />
            <p>{image.description}</p>
          </div>
        ))}
      </section>
    );
  }
}
