import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* LEFT TEXT */}
        <div className="text">
          <h1>Hi, I'm Jesima Begam</h1>
          <p>Front-End Developer | React Learner</p>

          <div className="buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="/resume.pdf" className="btn secondary">Download CV</a>
          </div>
        </div>
        {/*RIGHT IMAGE */}
        <img 
          src={profile} 
          alt="Jesima" 
          className="profile-img" 
        />
      </div>
    </section>
  );
}

export default Home;
