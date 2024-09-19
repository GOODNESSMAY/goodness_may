import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Goodness Ubi</span>
          </h1>
          <div className="text-animate">
            <h3>Front-End Developer</h3>
          </div>
          <p>
            A highly motivated and skilled Front-End Web Development Engineer
            with a capability in Front-End & Back-End Web Development.Committed
            to continuous growth, I aim to enhance my skills, expand my
            professional impact in the field, and make a meaningful impact to
            utilize my skills.
          </p>

          <div className="btn-box">
            <a href="a" className="btn">
              Hire Me
            </a>
            <a href="a" className="btn">
              let's Talk
            </a>
          </div>
        </div>

        <div className="home-sci">
          <a href="https://www.facebook.com/May.Flower">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="https://twitter.com/mayflower">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/mayflower/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="http://t.me/mayflower">
            <i className="bx bxl-telegram"></i>
          </a>
        </div>
        <div className="home-imgHover"></div>
      </section>
    </>
  );
}

export default Home;
