
import './work.css'



const Work = () =>{

    return(
            <section className='work section' id='work'>
                <span className='section-subtitle'>My Porfolio</span>
                <h2 className='section-title'>Recent Works</h2>
                <div className='work-filters'>
                    <span className='work-item active-work' data-filter="all">All</span>
                    <span className='work-item' data-filter=".web">Web</span>
                    <span className='work-item' data-filter=".movil">Movil</span>
                    <span className='work-item' data-filter=".design">Design</span>
                </div>
                <div className='work-container container grid'>
                    <div className='work-card mix web'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Web design</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <div className="work-icon">
                            <box-icon name='right-arrow-alt'></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='work-card mix movil'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>App Movil</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <div className="work-icon">
                            <box-icon name='right-arrow-alt'></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='work-card mix design'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Apps</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <div className="work-icon">
                            <box-icon name='right-arrow-alt'></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='work-card mix web'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Challenge Frontend Mentor</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <div className="work-icon">
                            <box-icon name='right-arrow-alt'></box-icon>
                            </div>
                        </a>
                    </div>
                    <div className='work-card mix movil'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Responsive Design</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <div className="work-icon">
                            <box-icon name='right-arrow-alt'></box-icon>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
    )
}

export default Work
