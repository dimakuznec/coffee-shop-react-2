import search from './../../img/search.svg';
import shoppingBag from './../../img/shopping-bag.svg';
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return ( 
        <header id="header-section">
            <div className="container container-header">
                <div className="header">
                    <nav className="nav-main">
                        <ul className="nav-main__list">
                            <li className="nav-main__item">
                                <Link className="nav-main__link nav-main__link_selected" to="Home">Home</Link>
                            </li>
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="About">About</Link>
                            </li>
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="Menu">Menu</Link>
                            </li>
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="Reservation">Reservation</Link>
                            </li>
                        </ul>
                        <img className="header__logo" src={logo} alt="#"/>
                        <ul className="nav-main__list">
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="Pages">Pages</Link>
                            </li>
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="Shop">Shop</Link>
                            </li>
                            <li className="nav-main__item">
                                <Link className="nav-main__link" to="Contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-action">
                        <a href='Basket' className="header-action__cart material-icons-outlined">
                           <img src={shoppingBag} alt="#"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;