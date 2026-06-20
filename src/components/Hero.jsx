import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          👋 Welcome To My Portfolio
        </span>

        <h1>
          Hi, I'm
          <span className="gradient-text">
            {" "}Ashwini Sabale
          </span>
        </h1>

        <div className="typing-text">
          <TypeAnimation
            sequence={[
              "Data Analyst",
              2000,
              "MERN Developer",
              2000,
              "UI Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p>
          Passionate B.Tech Information Technology student
          focused on building modern web applications,
          creating interactive user experiences,
          and analyzing data using Power BI and SQL.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <FaDownload />
            View Resume
          </a>

          <a
            href="https://github.com/ashwini-s2004"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/ashwini-s2004"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashwini-sabale-21ba00380"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/__ashwinii_20__"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-container">

          <div className="profile-border">

            <img
              src="/profile.jpg"
              alt="Ashwini Sabale"
              className="profile-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;