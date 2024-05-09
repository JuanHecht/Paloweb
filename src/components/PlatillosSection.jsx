/* import './PlatillosSection.css'

function PlatillosSection(){
    return(
        <div className="section">
            <div className='sectionTitle'>
                <h2>Comfort food</h2>
                <h4>Buscamos dar una experiencia comoda y real</h4>
            </div>
            <div className='platillosSection'>
                <div className='platilloImg'>
                    <img src="./compartir.jpg" alt="" />
                    <p>Para compartir</p>
                </div>
                <div className='platilloImg'>
                    <img src="./llenarte.jpg" alt="" />
                    <p>Para llenarte</p>
                </div>
                <div className='platilloImg'>
                    <img src="./postre.jpg" alt="" />
                    <p>Para postre</p>
                </div>
                <div className='platilloImg'>
                    <img src="./beber.jpg" alt="" />
                    <p>Para tomar</p>
                </div>
                <div className='platilloImg'>
                    <img src="./lugar.jpg" alt="" />
                    <p>El lugar</p>
                </div>
            </div>
        </div>
        
    )
}

export default PlatillosSection; */

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PlatillosSection.css';

// Import your images
import compartirImg from '/compartir.jpg';
import llenarteImg from '/llenarte.jpg';
import postreImg from '/postre.jpg';
import beberImg from '/beber.jpg';
import lugarImg from '/lugar.jpg';

function PlatillosSection() {
  return (
    <div className="section">
      <div className='sectionTitle'>
        <h2>Comfort food</h2>
        <h4>Buscamos dar una experiencia cómoda y real</h4>
      </div>
      <Carousel showThumbs={false} showArrows={true} emulateTouch={true} showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={33}>
        <div>
          <img src={compartirImg} alt="Para compartir" />
          <p>Para compartir</p>
        </div>
        <div>
          <img src={llenarteImg} alt="Para llenarte" />
          <p>Para llenarte</p>
        </div>
        <div>
          <img src={postreImg} alt="Para postre" />
          <p>Para postre</p>
        </div>
        <div>
          <img src={beberImg} alt="Para tomar" />
          <p>Para tomar</p>
        </div>
        <div>
          <img src={lugarImg} alt="El lugar" />
          <p>El lugar</p>
        </div>
      </Carousel>
    </div>
  );
}

export default PlatillosSection;
