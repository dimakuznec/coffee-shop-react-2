import './index.css';
import news1 from './../../img/news-1.jpg';
import news2 from './../../img/news-2.jpg';
import news3 from './../../img/news-3.jpg';

const SectionNews = () => {
    return ( 
        <section id="section-news" className="section-main">
            <div className="container">
                <h2 className="section-title">Testimonial</h2>
                <h3 className="section-subtitle">Our latest news</h3>
                <div className="news-wrap">
                    <div className="news">
                        <img className="news__img" src={news1} alt="#"/>
                        <div className="news-description">
                            <div className="news-info">
                                <span className="news__author"><span className="news__author_dark">By: </span>rasaline</span>
                                <time className="news__date" datetime="2021-01-21">23.01.2021</time>
                            </div>
                            <p className="news__text">Ideal cocktails from barmen....</p>
                            <a className="news__link" href="#">Read more <span className="material-icons-outlined">arrow_forward</span></a>
                        </div>
                    </div>
                    <div className="news">
                        <img className="news__img" src={news2} alt="#"/>
                        <div className="news-description">
                            <div className="news-info">
                                <span className="news__author"><span className="news__author_dark">By: </span>rasaline</span>
                                <time className="news__date" datetime="2021-01-21">23.01.2021</time>
                            </div>
                            <p className="news__text">Ideal cocktails from barmen....</p>
                            <a className="news__link" href="#">Read more <span className="material-icons-outlined">arrow_forward</span></a>
                        </div>
                    </div>
                    <div className="news">
                        <img className="news__img" src={news3} alt="#"/>
                        <div className="news-description">
                            <div className="news-info">
                                <span className="news__author"><span className="news__author_dark">By: </span>rasaline</span>
                                <time className="news__date" datetime="2021-01-21">23.01.2021</time>
                            </div>
                            <p className="news__text">Ideal cocktails from barmen....</p>
                            <a className="news__link" href="#">Read more <span className="material-icons-outlined">arrow_forward</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default SectionNews;