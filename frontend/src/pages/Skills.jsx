import Navbar from "../components/Navbar";

function Skills() {
  return (
    <>
      <Navbar />
      <section className="skills" id="skills">
        <h2 className="heading">
          my <span>skills</span>
        </h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">coding skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Python <span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Javascript <span>50%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h3 className="title">Professional skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    Front-End Developer <span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Data Entry Specialist <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Social Media Marketer <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Web Developer <span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
