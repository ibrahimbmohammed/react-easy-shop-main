import React from "react";

import { Gallery, GalleryImage } from "react-gesture-gallery";
import pic1 from "../../images/lacenobackblue - Copy.png";
import pic2 from "../../images/Layer 8 - Copy.png";
import pic3 from "../../images/Layer 91.png";
const images = [pic1, pic2, pic3];

export default function ImageSlider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "transparent",
        height: "100%",
        width: "100%"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="cover" key={image} src={image} />
      ))}
    </Gallery>
  );
}
