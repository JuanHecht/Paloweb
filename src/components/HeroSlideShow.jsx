/* import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={idx === index ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
 */
import React, { useState, useEffect } from 'react';
import './HeroSlideShow.css'

const Slideshow = () => {
  const images = ['/heroImg.jpg', '/heroImg2.jpg', '/heroImg3.jpg']

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="heroImgContainer">
      <img src={images[index]} alt="" />
    </div>
  );
};

export default Slideshow;
