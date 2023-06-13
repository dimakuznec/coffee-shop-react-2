import feature1 from './../../img/feature-1.jpg';
import feature2 from './../../img/feature-2.jpg';
import feature3 from './../../img/feature-3.jpg';
import feature4 from './../../img/feature-4.jpg';
import './index.css';

const Container = () => {
    return ( 
        <>
            <div className="container">
                <ol className="features section-main">
                    <li className="features__item">
                        <span className="features__item_dark">01</span>Best Coffee Flavour
                        <img className="features__img" src={feature1} alt="#"/>
                    </li>
                    <li className="features__item">
                        <span className="features__item_dark">02</span>Place to get lost
                        <img className="features__img" src={feature2} alt="#"/>
                    </li>
                    <li className="features__item">
                        <span className="features__item_dark">03</span>Proper roesting
                        <img className="features__img" src={feature3} alt="#"/>
                    </li>
                </ol>
            </div>

           <section id="history-section" className="section-main">
                <div className="container">
                    <div className="history-wrap">
                        <img className="history-wrap__img" src={feature2} alt="#"/>
                        <img className="history-wrap__img" src={feature4} alt="#"/>
                        <img className="history-wrap__img" src={feature1} alt="#"/>
                        <div className="history">
                            <h2 className="history__title section-title">Our history</h2>
                            <h3 className="history__subtitle section-subtitle">Create a<br/>
                                new story with us</h3>
                            <p className="history__text section__text">mauris rhoncus in imperdiet placerat. 
                                vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. 
                                cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. 
                                preasent ut quam quis quam venen atis fringilla. morbi vastibulum id tells mmodo mattis. 
                                aliauam erat volutpal.
                            </p>
                        </div>
                    </div>
                </div>
           </section>
        </>
        
    );
}
 
export default Container;