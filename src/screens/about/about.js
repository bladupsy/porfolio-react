
import './about.css'

const About = () =>{
    return(
        <section className="about section" id='about'>
            <span className='section-subtitle'>My Intro</span>
            <h2 className='section-title'> About Me</h2>
            <div className='about-container container grid'>
                <img className='about-img' alt='about me porfolio gisela cristaldo' />
                <div className='about-data'>
                    <div className='about-box'>
                        <h3 className='about-title'></h3>
                        <span className='about-subtitle'></span>
                    </div>
                    <div className='about-box'>
                        <h3 className='about-title'></h3>
                        <span className='about-subtitle'></span>
                    </div>
                    <div className='about-box'>
                        <h3 className='about-title'></h3>
                        <span className='about-subtitle'></span>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About