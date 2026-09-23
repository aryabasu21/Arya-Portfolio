import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Angular Developer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2026–PRESENT</h3>
            </div>
            <p>
              Developed and maintained web applications using Angular,
              TypeScript, and RxJS, implementing responsive designs and
              optimizing performance for enterprise-level projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Automation Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and implemented automated testing frameworks and scripts
              using Selenium and Playwright, increasing test coverage and
              reducing manual testing efforts for web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Developer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and maintained user interfaces using React, Redux, and
              Material-UI, ensuring seamless user experiences and implementing
              best practices for state management and component architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
