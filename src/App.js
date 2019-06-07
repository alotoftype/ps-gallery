import React, { Suspense } from "react";
import "./styles/main.scss";

const Gallery = React.lazy(() => import("./components/gallery"));

function App() {
  return (
    <div className="App">
      <h1>Here we go</h1>
      <div className="section">
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
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
[]Use 100% polymer.js for this exercise, see https://www.polymer-project.org/ for more details
[]Build in sorting function by DATE or ACTIVE
[]Build in filtering by TAG or SOURCE or ORG
[]Build this exercise as a Single page app
[]If your gallery code supports more than one viewport (desktop vs device)
[]Includes unit tests
*/
