
import Me from '../../assets/jason-goodman-Kt-E_Qq8DW4-unsplash.jpg'
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
                    {/* Link download cv */}
                    <a download="" href='' className="button button--ghost"> Download CV</a>
                    <a href='#about' className='button'>About me</a>
                </div>
                <div className="home-handle">
                        <img  className="home-img" src={Me} alt='porfolio in Gisela Cristaldo'/>
                </div>
                <div className="home-social">
                    <a href='https://www.linkedin.com/in/gisela-cristaldo/' className="home-social-link">
                        <box-icon name='linkedin-square' type='logo' ></box-icon>
                    </a>
                    <a href='https://github.com/bladupsy' className="home-social-link">
                        <box-icon name='github' type='logo' ></box-icon>
                    </a>
                    <a href='https://dribbble.com/' className="home-social-link">
                        <box-icon name='dribbble' type='logo' ></box-icon>
                    </a>
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