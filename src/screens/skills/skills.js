
import './skills.css'

const Skills = () =>{
    return(
        <section className="skills section" id='skills'>
            <span className='section-sibtitle'>My abilities</span>
            <h2 className='section-title'>My Experience</h2>
            <div className='skills-container container grid'>
                <h3 className='skills-title'>Frontend developer</h3>
                <div className='skills-box'>
                    <div className='skills-group'>
                        <div className='skills-data'>
                        <box-icon type='solid' name='check-circle'></box-icon>
                            <div className='skills-name'>
                                <span className='skills-level'>

                            </span>
                            </div>
                        </div>
                        <div className='skills-data'>
                        <box-icon type='solid' name='check-circle'></box-icon>
                            <div className='skills-name'>
                                <span className='skills-level'>

                            </span>
                            </div>
                        </div>
                        <div className='skills-data'>
                        <box-icon type='solid' name='check-circle'></box-icon>
                            <div className='skills-name'>
                                <span className='skills-level'>

                            </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>


    )
}

export default Skills