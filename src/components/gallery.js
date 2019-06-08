import React, { Component } from "react";
import axios from "axios";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      filter:""
    };
}


  filterGallery = e => {
    this.setState({filter: e.target.value})
  }
  sortbyDate = images  => e => {
    const sorted = images
    sorted.sort((a, b) => a - b) 
    console.log(sorted.map(sort => console.log(sort.date ,sort.description)))
  }
  sortGallery = value => e => {
    switch(value){
      case 'date':
        return ''
      case 'Active':
        return ''
      default:
        return ''
  }
}
  

  componentDidMount() {
    if (!version || version < currentVersion) {
      axios.get("http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0").then(({ data }) => {
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
      <>
        <div className="gallery-filters">
           <div className="gallery-filters__options">
          <input type="text" onChange={this.filterGallery} value={filter} />
          <button onClick={this.sortbyDate(filteredImages)}>sort by date</button>
        </div>
        </div>
      <section className="gallery">
       
        {filteredImages.map(image => console.log(image.date , image.description))}
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
      </>
    );
  }
}

const currentVersion = 3;
let data = localStorage.getItem("data");
let version = localStorage.getItem("version");
