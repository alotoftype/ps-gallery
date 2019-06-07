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
    if (!version || version < currentVersion) {
      axios.get("./api.json").then(({ data }) => {
        console.log(data.rows);
        this.setState({
          images: data.rows
        });
        localStorage.setItem("data", JSON.stringify(data.rows));
        localStorage.setItem("version", currentVersion);
      });
    } else {
      this.setState({ images: JSON.parse(localStorage.data) });
    }
  }

  render() {
    const { images } = this.state;
    console.log("these are my images: ", images);
    return (
      <section className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={image.org.concat(index)}>
            <img src={image.image} alt={image.tag} />
            <div>
              <span>
                {image.tag
                  .split("|")
                  .map(tag => tag)
                  .join(" ")}
              </span>
            </div>
            <p>{image.description}</p>
          </div>
        ))}
      </section>
    );
  }
}

const currentVersion = 3;
let data = localStorage.getItem("data");
let version = localStorage.getItem("version");
