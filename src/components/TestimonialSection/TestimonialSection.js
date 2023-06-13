import testimonial1 from './../../img/testimonial-1.jpg';
import testimonial2 from './../../img/testimonial-2.jpg';
import './TestimonialSection.css'

const TestimonialSection = () => {
    return ( 
        <section id="testimonial-section" className="section-main">
            <div className="container">
                <h2 className="section-title">Testimonial</h2>
                <h3 className="section-subtitle">Says our customers</h3>
                <div className="testimonial-wrap">
                    <div className="testimonial">
                        <div className="testimonial-data">
                            <img className="testimonial__img" src={testimonial1} alt="#"/>
                            <p className="testimonial__text section__text">Education WP is a special build for effective education & Learning Management System site. 
                                Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP.
                            </p>
                        </div>
                        <div className="testimonial-info">
                            <div className="testimonial-person">
                                <span className="testimonial__name">John Smith</span>
                                <span className="testimonial__position">Product Designer</span>
                            </div>
                            <ul className="testimonial__list rating__list">
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                            </ul>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-data">
                            <img className="testimonial__img" src={testimonial2} alt="#"/>
                            <p className="testimonial__text section__text">Education WP is a special build for effective education & Learning Management System site. 
                                Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP.
                            </p>
                        </div>
                        <div className="testimonial-info">
                            <div className="testimonial-person">
                                <span className="testimonial__name">Brett Lee</span>
                                <span className="testimonial__position">User Experience Designer</span>
                            </div>
                            <ul className="testimonial__list rating__list">
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                                <li className="rating__item material-icons-outlined">star</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="testimonial-action">
                    <div className="testimonial-count">
                        <b className="testimonial-count__text">2/6 People</b>
                        <progress className="testimonial-count__progress" value="40" max="100"></progress>
                    </div>
                    <div className="testimonial-btn-wrap">
                        <button className="testimonial-btn material-icons-outlined">west</button>
                        <button className="testimonial-btn material-icons-outlined testimonial-btn_active">east</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default TestimonialSection;