import './AboutSection.css'

function About(){
    return(
        <div className="sectionAbout">
            <div className='leftSide'>
                <img src="/heroImg5.jpg" alt="" />
            </div>
            <div className='rightSide'>
                <p className='miniTitle'>Nuestro concepto</p>
                <h2>California<br/>Vibes</h2>
                <p>Nuestro conepto nace con la idea de una fusión entre el estilo de vida californiano
                    mezclado con la calidad de la comida italiana. Dando vida a Palo Alto, un lugar 
                    donde se puede ir a disfrutar con la familia o con amigos de una deliciosa oferta
                    culinaria manteniendo buenos precios y un espacio con ambiente increible.
                </p>
            </div>
        </div>
    )
}

export default About;