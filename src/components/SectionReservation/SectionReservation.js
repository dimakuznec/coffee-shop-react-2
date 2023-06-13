import './index.css'

const SectionReservation = () => {
    return ( 
        <section id="section-reservation" className="section-main">
        <div className="container">
            <div className="reservation-wrap">
                <div className="reservation-map"></div>
                <form className="reservation">
                    <h2 className="reservation__title section-title">Reservation</h2>
                    <h3 className="reservation__subtitle section-subtitle">Booking a table</h3>
                    <input className="reservation__input" type="text" value="4 person"/>
                    <input className="reservation__input" type="text" value="12.25, 2020"/>
                    <input className="reservation__input" type="text" value="11:00 AM"/>
                    <button className="reservation__btn btn-primary">BOOK TABLE</button>
                </form>
            </div>
        </div>
    </section>
    );
}
 
export default SectionReservation;