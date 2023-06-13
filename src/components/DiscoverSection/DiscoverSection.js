import discover from './../../img/discover.png';
import './index.css';
const DiscoverSection = () => {
    return ( 
        <section id="discover-section" className="section-main">
            <div className="container">
                <div className="discover-wrap">
                    <img className="discover-img" src={discover} alt="#"/>
                    <div className="discover">
                        <h3 className="discover__title section-subtitle">Coffee<br/> machine, buy for home</h3>
                        <p className="section__text">mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. 
                            cars massa nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri ngilla. 
                            morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.
                        </p>
                        <a className="discover__link btn-primary" href="#">Discover now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default DiscoverSection;