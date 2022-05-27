import { javascript,  technical } from "../../config/constants";
import "./technical.css";

const Technical = () => {
  return (
    <section className="skills section" id="technical">
      <span className="section-subtitle">My abilities</span>
      <h2 className="section-title">Certifications</h2>
      <div className="technical-container container grid">
        <div className="skills-content">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-box">
            <div className="skills-group">
              {technical.map((certificate) => (
                <div className="skills-data">
                  <div className="skills-icon">
                    <div className="skills-icon">
                      <box-icon type="solid" name="check-circle"></box-icon>
                    </div>
                  </div>
                  <div key={certificate.key}>
                    <h3 className="skills-name">{certificate.title}</h3>
                    <span className="technical-description">{certificate.description}</span>
                    <span className="technical-level">{certificate.platform}</span>
                    <a href={certificate.certificates}  target='_blank' className="technical-button">View certificate</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-box">
            <div className="skills-group">
              {javascript.map((certificate) => (
                <div className="skills-data">
                  <div className="skills-icon">
                    <div className="skills-icon">
                      <box-icon type="solid" name="check-circle"></box-icon>
                    </div>
                  </div>
                  <div key={certificate.key}>
                    <h3 className="technical-name">{certificate.title}</h3>
                    <span className="technical-description">{certificate.description}</span>
                    <span className="technical-level">{certificate.platform}</span>
                    <a href={certificate.certificates}  target='_blank' className="technical-button">View certificate</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Technical;
