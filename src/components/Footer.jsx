import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>
          Ashwini<span>.</span>
        </h2>

        <p>
          Data Analyst • MERN Developer • UI Developer
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/ashwini-s2004"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashwini-sabale-21ba00380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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

        <p className="copyright">
          © 2026 Ashwini Sabale. All Rights Reserved.
        </p>

      </div>

      <button
        className="top-btn"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;