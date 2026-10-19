import { useEffect } from "react";

function Home() {

  useEffect(() => {
    document.title = "Home | My Portfolio";
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>Hi, I'm<span> Shanmugapriya</span></h1>

        <h2>Computer Science Student</h2>

        <p className="intro">
          I'm a curious learner passionate about technology, programming, and exploring new ideas.
          I enjoy building projects and continuously improving my skills.
        </p>

        <a
          href="/resume ssp.pdf"
          download
          className="resume-button"
        >
          Download Resume
        </a>
      </div>

      <div className="home-image">
        <img src="/profile.png" alt="My Profile" />
      </div>
    </section>
  );
}

export default Home;