import menu1 from './../../img/menu-1.jpg';
import menu2 from './../../img/menu-2.jpg';
import menu3 from './../../img/menu-3.jpg';
import menu4 from './../../img/menu-4.jpg';
import menu5 from './../../img/menu-5.jpg';
import './index.css'

const MenuSection = () => {
    return ( 
        <section id="menu-section" className="section-main">
            <div className="container">
                <h2 className="section-title">Menu</h2>
                <h3 className="section-subtitle">Coffee popular menu</h3>
                <ul className="menu-wrap">
                    <li className="menu">
                        <img className="menu__img" src={menu1} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu2} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu3} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu4} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu5} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu1} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu3} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                    <li className="menu">
                        <img className="menu__img" src={menu3} alt="#"/>
                        <h3 className="menu__title">Americano rosted gred</h3>
                        <b className="menu__price">$12:00</b>
                    </li>
                </ul>
            </div>
        </section>
    );
}
 
export default MenuSection;