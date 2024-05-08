import HeroSection from '../components/HeroSection'
import PlatillosSection from '../components/PlatillosSection';
import About from '../components/AboutSection';
import Reservations from '../components/Reservations';

function LandingPage(){
    return(
        <div>
            <HeroSection />
            <PlatillosSection/>
            <About/>
            <Reservations/>
        </div>
    )
}

export default LandingPage;