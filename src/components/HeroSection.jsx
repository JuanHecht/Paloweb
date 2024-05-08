import './HeroSection.css'
import Slideshow from './HeroSlideShow';

function LandingPage(){
const images = ['heroImg.jpg', 'heroImg2.jpg', 'heroImg3.jpg']

    return(
        <div>
            <div>
                <div className='navBar'>
                    <a>menu</a>
                    <a>reservaciones</a>
                    <a>galeria</a>
                </div>
                <div /* className='heroImgContainer' */>
                    <Slideshow /* images={images} */ />
                </div>
                <div className='heroInfo'>
                    <img src="/palo.png" alt="logo" />
                    {/* <h1>PALOALTO</h1>
                    <p>Cocina italoamericana</p> */}
                </div>
            </div>
        </div>
    )
}
export default LandingPage;