
import './about.css'
import IsMe from '../../assets/images/my.jpeg'

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
                        <div className='about-icon'> 
                        <box-icon name='award'></box-icon>
                        </div>
                        <h3 className='about-title'>Experience</h3>
                        <span className='about-subtitle'>1 Years Working</span>
                    </div>
                    <div className='about-box'>
                        <div className='about-icon'>
                        <box-icon name='briefcase-alt' ></box-icon>
                        </div>
                        <h3 className='about-title'>Completed</h3>
                        <span className='about-subtitle'>10 -Project</span>
                    </div>
                    <div className='about-box'>
                        <div className='about-icon'>
                        <box-icon name='support' ></box-icon>
                        </div>
                        <h3 className='about-title'>Support</h3>
                        <span className='about-subtitle'>Online 24/7</span>
                    </div>
                    </div>
                
                    <p className='about-description'>
                    Software developer, I love to provide an accessible and beautiful user experience. 
                    I work as a freelancer, currently for ABCDSoluctions, 
                    performing maintenance tasks and new module implementations (new designs) 
                    in Angular, Vue, JavaScript, and with Drupal CMS. 
                    </p>
                    <a href='mailto:gisela.cristaldo.work@gmail.com' className='button-about' >Contact Me</a>
                    </div>
            </div>
        </section>


    )
}

export default About