
import './skills.css'

const Skills = () =>{
    // const Variable = () => {}
    return(
        <section className="skills section" id='skills'>
            <span className='section-subtitle'>My abilities</span>
            <h2 className='section-title'>My Experience</h2>
            <div className='skills-container container grid'>
                <div className='skills-content'>
                <h3 className='skills-title'>Frontend developer</h3>
                <div className='skills-box'>
                    <div className='skills-group'>
                        <div className='skills-data'>
                        <div className='skills-icon'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            </div>
                            <div>
                                <h3 className='skills-name'>HTML</h3>
                                <span className='skills-level'>Intermedio</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>CSS</h3>
                                <span className='skills-level'>Advanced</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Bootstrap</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>JavaScript</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-group'>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Git</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Angular</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                                <div className='skills-icon'>
                                <box-icon type='solid' name='check-circle'></box-icon>
                                </div>
                            </div>
                            <div>
                                <h3 className='skills-name'>React</h3>
                                <span className='skills-level'>Basic</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className='skills-content'>
                <h3 className='skills-title'>Soft Skills</h3>
                <div className='skills-box'>
                    <div className='skills-group'>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle' className='icon'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Figma</h3>
                                <span className='skills-level'>Intermedio</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                                <div className='skills-icon'>
                                <box-icon type='solid' name='check-circle'></box-icon>
                                </div>
                            </div>
                            <div>
                                <h3 className='skills-name'>GitHub</h3>
                                <span className='skills-level'>Advanced</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'> 
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>GitLab</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Jira</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-group'>
                        <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Notion</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills-data'>
                        <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'>Trello</h3>
                                <span className='skills-level'>Intermediate</span>
                            </div>
                        </div>
                        {/* <div className='skills-data'>
                            <div className='skills-icon'>
                            <box-icon type='solid' name='check-circle'></box-icon>
                            </div>
                            <div>
                                <h3 className='skills-name'></h3>
                                <span className='skills-level'>Basic</span>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    )

}

export default Skills