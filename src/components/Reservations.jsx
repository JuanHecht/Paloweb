import './Reservations.css'

function Reservations() {
    return (
        <div className='sectionReservations'>
            <div className='reservacionLeftSide'>
                <h2>Reservaciones</h2>
                <div className='ubicacion'>
                    <a href="https://www.google.com/maps/place/Palo+Alto+Restaurante+Gdl/@20.699183,-103.3906717,17z/data=!3m1!4b1!4m6!3m5!1s0x8428afcf7ba16d8d:0x8f484d939f971a80!8m2!3d20.699178!4d-103.3880968!16s%2Fg%2F11vx14hzq7?authuser=0&entry=ttu" target="_blank">
                        <button>
                            <img src="/mapa.png" alt="Mapa" />
                        </button>
                    </a>
                    <div className='ubicacionInfo'>
                        <h4>Ubicación</h4>
                        <p>Av. Montevideo 3028</p>
                        <h4>Horario</h4>
                        <p>Martes-Sábado: 14:00-23:00</p>
                        <p>Domingos: 14:00-18:30</p>
                        <p>Lunes: Cerrado</p>
                    </div>
                </div>
                <a href="https://www.opentable.com.mx/restref/client/?restref=1356520&lang=es-MX&ot_source=Restaurant%20website&corrid=0beb6b21-1791-4bef-8385-1803e9d979d1">
                    <button className='reservationBtn'>
                        reserva ahora
                    </button>
                </a>
            </div>
            <div className='reservacionRightSide'>
                <a href="https://drive.google.com/file/d/1aSwSCx0GOmZ2oAnPleAfz2FjM-bUesNj/view" target="_blank">
                    <img src="/menu.png" alt="" />
                </a>
            </div>
        </div>

    )
}

export default Reservations;