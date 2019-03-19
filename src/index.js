import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

/* popout the browser and maximize to see more rows! -> */

const photos = [
  {
    src: "/photos/DSC00460.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/photos/DSC01378.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/photos/IMGP0030.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/photos/DSC00478.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/photos/IMG_1810.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/photos/DSC01523.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/photos/IMG_1817.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/photos/DSC01520.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/photos/IMG_1819.jpg",
    width: 4,
    height: 3
  }
];

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));
