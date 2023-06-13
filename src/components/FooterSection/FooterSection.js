import './index.css'
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return ( 
        <footer id="footer-section">
            <div className="container">
                <div className="footer">
                    <img className="footer__img" src={logo} alt="#"/>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link className="footer__link" to="Home">Home</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="Rerervation">Rerervation</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="Menu">Menu</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="About">About</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="Pages">Pages</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="Shop">Shop</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="Blogs">Blogs</Link>
                        </li>
                    </ul>
                    <form className="footer-form">
                        <input className="footer__input" type="email" placeholder="Enter your email"/>
                        <button className="footer-form__btn material-icons-outlined">east</button>
                    </form>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <p className="footer-copyright__text">e-Tennis © 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
 
export default FooterSection;