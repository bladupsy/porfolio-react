import { skills, skillsFront } from "../../config/constants";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section-subtitle">My abilities</span>
      <h2 className="section-title">My Experience</h2>
      <div className="skills-container container grid">
        <div className="skills-content">
          <h3 className="skills-title">Frontend developer</h3>
          <div className="skills-box">
            <div className="skills-group">
              {skills.map((skills) => (
                <div className="skills-data" key={skills.key}>
                  <div className="skills-icon">
                    <box-icon type="solid" name="check-circle"></box-icon>
                  </div>
                  <div>
                    <h3 className="skills-name">{skills.title}</h3>
                    <span className="skills-level">{skills.level}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-group">
              {skillsFront.map((skill) => (
                <div className="skills-data" key={skill.key}>
                  <div className="skills-icon">
                    <box-icon type="solid" name="check-circle"></box-icon>
                  </div>
                  <div>
                    <h3 className="skills-name">{skill.title}</h3>
                    <span className="skills-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h3 className="skills-title">Soft Skills</h3>
          <div className="skills-box">
            <div className="skills-group">
              <div className="skills-data">
                <div className="skills-icon">
                  <box-icon
                    type="solid"
                    name="check-circle"
                    className="icon"
                  ></box-icon>
                </div>
                <div>
                  <h3 className="skills-name">Figma</h3>
                  <span className="skills-level">Intermedio</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-icon">
                  <div className="skills-icon">
                    <box-icon type="solid" name="check-circle"></box-icon>
                  </div>
                </div>
                <div>
                  <h3 className="skills-name">GitHub</h3>
                  <span className="skills-level">Advanced</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-icon">
                  <box-icon type="solid" name="check-circle"></box-icon>
                </div>
                <div>
                  <h3 className="skills-name">GitLab</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-icon">
                  <box-icon type="solid" name="check-circle"></box-icon>
                </div>
                <div>
                  <h3 className="skills-name">Jira</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-data">
                <div className="skills-icon">
                  <box-icon type="solid" name="check-circle"></box-icon>
                </div>
                <div>
                  <h3 className="skills-name">Notion</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-icon">
                  <box-icon type="solid" name="check-circle"></box-icon>
                </div>
                <div>
                  <h3 className="skills-name">Trello</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
