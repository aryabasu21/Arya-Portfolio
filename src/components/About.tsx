import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">
          <span>About</span> <span>Me</span>
        </h3>
        <p className="para">
          I'm a <strong>Full Stack Web Developer</strong> from Kolkata, India,
          building scalable and production-ready web applications.
          <br />
          <br />I work with{" "}
          <span>React, Next.js, Node.js, Express, and MongoDB</span> to create
          modern interfaces, reliable APIs, and backend systems.
          <br />
          <br />
          My focus is on{" "}
          <span>
            clean architecture, performance, security, and seamless user
            experiences
          </span>
          .
          <br />
          <br />I turn ideas into polished digital products and continuously
          explore new technologies to build better for the web.
        </p>
      </div>
    </div>
  );
};

export default About;
