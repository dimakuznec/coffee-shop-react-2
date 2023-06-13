import popular1 from './../../img/popular-1.jpg';
import './PopularSection.css';
import shoppingBag from './../../img/shopping-bag.svg';



const PopularSection = () => {
    return ( 
        <section id="popular-section" className="section-main">
            <div className="container">
                <h2 className="section-title">Popular Product</h2>
                <h3 className="section-subtitle">Coffee popular Product</h3>
                <div className="popular-wrap">
                   <div className="popular">
                        <img className="popular__img" src={popular1} alt="#"/>
                        <div className="rating">
                            <h4 className="rating__title">COFFEE</h4>
                            <ul className="rating__list">
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star_border</li>
                            </ul>
                        </div>
                        <h3 className="popular__title">brazil coffee gred</h3>
                        <b className="popular__price">Price - <strong className="popular__price_dark">$320.00/</strong> $358</b>
                        <a href='Basket' className="popular__btn btn-primary"><span className="material-icons-outlined">
                        <img src={shoppingBag} alt="#"/>
                        </span>Add to cart</a>
                    </div>
                    <div className="popular">
                        <img className="popular__img" src={popular1} alt="#"/>
                        <div className="rating">
                            <h4 className="rating__title">COFFEE</h4>
                            <ul className="rating__list">
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star_border</li>
                            </ul>
                        </div>
                        <h3 className="popular__title">brazil coffee gred</h3>
                        <b className="popular__price">Price - <strong className="popular__price_dark">$320.00/</strong> $358</b>
                        <a href='Basket' className="popular__btn btn-primary"><span className="material-icons-outlined">
                        <img src={shoppingBag} alt="#"/>
                        </span>Add to cart</a>
                    </div>
                    <div className="popular">
                        <img className="popular__img" src={popular1} alt="#"/>
                        <div className="rating">
                            <h4 className="rating__title">COFFEE</h4>
                            <ul className="rating__list">
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star_border</li>
                            </ul>
                        </div>
                        <h3 className="popular__title">brazil coffee gred</h3>
                        <b className="popular__price">Price - <strong className="popular__price_dark">$320.00/</strong> $358</b>
                        <a href='Basket' className="popular__btn btn-primary"><span className="material-icons-outlined">
                        <img src={shoppingBag} alt="#"/>
                        </span>Add to cart</a>
                    </div>
                </div>
                <a className="popular__link btn-primary" href="#">View all product</a>
            </div>
        </section>
    );
}
 
export default PopularSection;