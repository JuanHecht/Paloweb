import './PlatillosSection.css'

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

export default PlatillosSection;