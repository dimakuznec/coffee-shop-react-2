import './index.css';


const BannerSection = () => {
    return (  
        <section id="banner-section">
        <div className="container">
            <div className="banner">
                <div className="banner-info">
                    <h2 className="banner__header">Enjoy Your Morning Coffee.</h2>
                    <p className="banner__text">The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. 
                    given to Opportunity</p>
                    <button className="banner__btn btn-primary">Test Coffee</button>
                </div>
                <a href='Blogs' className="banner-video__btn">Play video blogs</a>
            </div>
        </div>
        </section>
    );
}
 
export default BannerSection;