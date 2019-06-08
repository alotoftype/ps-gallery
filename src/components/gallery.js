import React, { Component } from "react";
import axios from "axios";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      filter:""
    };
    this.filterGallery = this.filterGallery.bind(this)
}


  filterGallery(e) {
    this.setState({filter: e.target.value})
  }

  sortGallery = value => e => {
    switch(value){
      case 'date':
        return 'hello'
      case 'Active':
        return 'hi'
      default:
        return 'by'
  }
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
      this.setState({ images: JSON.parse(data) });
    }
  }

  render() {
    const { filter, images } = this.state;
    const query = filter.toLowerCase();
    const filteredImages = images.filter(image => 
      Object.keys(image).some(key => image[key]
        .toLowerCase().includes(query)))
    return (
      <section className="gallery">
        <div>
          <input type="text" onChange={this.filterGallery} value={filter} />
        </div>
        
        {filteredImages.map((image, index) => (
          <div className="gallery-item" key={image.org.concat(index)}>
            <div className="gallery-item__date">{image.date}</div>
            <div className="gallery-item__image">
              <img src={image.image} alt={image.tag} />
            </div>
            <div>
              <>
                {image.tag
                  .split("|")
                  .map(tag => tag)
                  .join(" ")}
              </>
            </div>
            <p className="gallery-item__desciption">{image.description}</p>
          </div>
        ))}
      </section>
    );
  }
}

const currentVersion = 3;
let data = localStorage.getItem("data");
let version = localStorage.getItem("version");
