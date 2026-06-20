import "./About.css";
import {
  FaLaptopCode,
  FaDatabase,
  FaChartBar,
  FaProjectDiagram,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <span className="section-tag">
        ABOUT ME
      </span>

      <h2 className="section-title">
        Get To Know <span>Me</span>
      </h2>

      <div className="about-container">

        <div className="about-left">

          <h3>
            Passionate Developer & Data Enthusiast
          </h3>

          <p>
            I am Ashwini Sabale, a B.Tech Information
            Technology student with a strong interest in
            Software Development, Data Analytics, and
            Modern Web Technologies.
          </p>

          <p>
            I enjoy building responsive web applications,
            creating intuitive user interfaces, and
            analyzing data to uncover meaningful insights.
            My goal is to develop innovative solutions
            that solve real-world problems.
          </p>

          <p>
            Currently focusing on Java, SQL, MongoDB,
            Power BI, React, and Full Stack Development.
          </p>

        </div>

        <div className="about-right">

          <div className="about-card">
            <FaProjectDiagram />
            <h4>4+</h4>
            <p>Projects Completed</p>
          </div>

          <div className="about-card">
            <FaLaptopCode />
            <h4>7+</h4>
            <p>Technologies Learned</p>
          </div>

          <div className="about-card">
            <FaDatabase />
            <h4>3+</h4>
            <p>Database Tools</p>
          </div>

          <div className="about-card">
            <FaChartBar />
            <h4>100%</h4>
            <p>Learning Mindset</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;