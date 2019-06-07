import React from 'react';
import Gallery from './components/gallery';


function App() {


  return (
    <div className="App">
      <h1>Here we go</h1>
      <div className="section">
      <Gallery/>
      </div>

    </div>
  );
}

export default App;

/*TODO Please create a gallery that displays images

[] 1. Must use this JSON as the data source JSON: https://drive.google.com/file/d/0B1jthw9CHq9zNWM2QkVlV1NvODdRd1AxbEpBTk1aZlpsRU5Z/view?usp=sharing 
[] 2. The gallery should initially display 4 images on the page
[] 3. The gallery should either 
    a. lazily load more images from the JSON as the user scrolls 
    b.  give the option to page to view the next or previous images in the gallery
[] 4. Each image should load and have printed on the page to include 
    a. DESCRIPTION
    b. TAG
    c. DATE 

Bonus
*/