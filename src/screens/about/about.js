
import './about.css'
import IsMe from '../../assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'

const About = () =>{
    return(
        <section className="about section" id='about'>
            <span className='section-subtitle'>My Intro</span>
            <h2 className='section-title'> About Me</h2>
            <div className='about-container container grid'>
                <img className='about-img'  src={IsMe} alt='about me porfolio gisela cristaldo' />
                <div className='about-data'>
                    <div className='about-info'>
                    <div className='about-box'>
                        <box-icon name='award'></box-icon>
                        <h3 className='about-title'>Experience</h3>
                        <span className='about-subtitle'>1 Years Working</span>
                    </div>
                    <div className='about-box'>
                    <box-icon name='briefcase-alt' ></box-icon>
                        <h3 className='about-title'>Completed</h3>
                        <span className='about-subtitle'>10 -Project</span>
                    </div>
                    <div className='about-box'>
                        <box-icon name='support' ></box-icon>
                        <h3 className='about-title'>Support</h3>
                        <span className='about-subtitle'>Online 24/7</span>
                    </div>
                    </div>
                
                    <p className='about-description'>
                        Frontend developer, I create web pages with UI /UX user interface.
                        I have years of experience and many clients are happy with the projects carried put.
                    </p>
                    <a href='#contact' className='button'>Contact Me</a>
                    </div>
            </div>
        </section>


    )
}

export default About