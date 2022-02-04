
import './work.css'

const Work = () =>{
    return(
            <section className='work section' id='work'>
                <span className='section-subtitle'>My Porfolio</span>
                <h2 className='section-title'>Recent Works</h2>
                <div className='work-filters'>
                    <span className='work-item'>All</span>
                    <span className='work-item'>Web</span>
                    <span className='work-item'>Movil</span>
                    <span className='work-item'>Design</span>
                </div>
                <div className='work-container container grid'>
                    <div className='work-card'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Web design</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <box-icon name='right-arrow-alt'></box-icon>
                        </a>
                    </div>
                    <div className='work-card'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>App Movil</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <box-icon name='right-arrow-alt'></box-icon>
                        </a>
                    </div>
                    <div className='work-card'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Apps</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <box-icon name='right-arrow-alt'></box-icon>
                        </a>
                    </div>
                    <div className='work-card'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Componentes proyects</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <box-icon name='right-arrow-alt'></box-icon>
                        </a>
                    </div>
                    <div className='work-card'>
                        <img src='' alt='' className='work-img'/>
                        <h3 className='work-title'>Responsive Design</h3>
                        <a href='#' className='work-button'>
                            Demo 
                            <box-icon name='right-arrow-alt'></box-icon>
                        </a>
                    </div>

                </div>
            </section>
    )
}

export default Work