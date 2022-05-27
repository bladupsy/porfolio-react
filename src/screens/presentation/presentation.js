
import Me from '../../assets/my-she.jpg'
import { social } from '../../config/constants'
import './presentation.css'

const Presentation = () =>{
    return(
        <section className="home section" id='home'>
            <div className="home-container container grid">
                <div className="home-data">
                    <span className="home-greeting">Hello, I'am</span>
                    <h1 className="home-name">Gisela Cristaldo</h1>
                    <h3 className="home-education">Frontend Developer</h3>
                </div>
                <div className='home-buttons'>
                    <a download="" href='../../assets/cv/CV-Cristaldo-Gisela.pdf' className="button button--ghost"> Download CV</a>
                    <a href='#about' className='button'>About me</a>
                </div>
                <div className="home-handle">
                        <img  className="home-img" src={Me} alt='porfolio in Gisela Cristaldo'/>
                </div>
                <div className="home-social">
                    {
                        social.map((link)=>(
                    <a href={link.link} className="home-social-link" key={link.key}  target='_blank'>
                        <box-icon name={link.icon} type='logo' ></box-icon>
                    </a>
                        ))
                    }
                </div>
                <a href='#about' className='home-scroll'>
                    <box-icon name='mouse' ></box-icon>
                    <span className='home-scroll-name'>Scroll Down</span>
                </a>
            </div>
        </section>
    )
}

export default Presentation