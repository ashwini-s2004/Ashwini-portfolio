import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <span className="section-tag">
        CONTACT
      </span>

      <h2 className="section-title">
        Let's <span>Connect</span>
      </h2>

      <p className="section-subtitle">
        Feel free to reach out for opportunities,
        collaborations, or just a friendly conversation.
      </p>

      <div className="contact-container">

        <div className="contact-left">

          <div className="contact-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>ashwinisabale61@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 9960992036</p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/ashwini-sabale-21ba00380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>Visit Profile</p>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub />
            <div>
              <h3>GitHub</h3>
              <p>View Repositories</p>
            </div>
          </a>

        </div>

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;