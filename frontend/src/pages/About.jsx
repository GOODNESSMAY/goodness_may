import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="About" id="About">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="About-img">
          <img src="MAYFLOWER.png" alt="" />
          <span className="circle-spin"></span>
        </div>
        <div className="About-content">
          <h3>Frontend Developer!</h3>
          <p>
            A highly motivated and skilled Front-End Web Development Engineer
            with a strong capabilities in Back-end and Front-End Web
            Development.Committed to continuous growth, I aim to enhance my
            skills, expand my professional impact in the field, and make a
            meaningful impact to utilize my skills.
          </p>

          <div className="btn-box btns">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
