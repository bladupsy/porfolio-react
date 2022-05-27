
import './work.css';
import { projects } from '../../config/constants';

const Work = () =>{
    return(
            <section className='work section' id='work'>
                <span className='section-subtitle'>My Porfolio</span>
                <h2 className='section-title'>Recent Works</h2>
                <div className='work-filters'>
                    <span className='work-item active-work' data-filter="all">All</span>
                    <span className='work-item' >Web</span>
                    <span className='work-item' >Movil</span>
                    <span className='work-item' >Design</span>
                </div>
                <div className='work-container container grid'>
                    {
                        projects.map((item)=> (
                            <div className='work-card mix movil' key={item.key}>
                            <img src={item.img} alt='' className='work-img'/>
                            <div className='work-article'>
                            <h3 className='work-title'>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} className='work-button'  rel="noopener noreferrer" target='_blank'>
                                Demo 
                                <div className="work-icon">
                                <box-icon name='right-arrow-alt'></box-icon>
                                </div>
                            </a>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </section>
    )
}

export default Work
