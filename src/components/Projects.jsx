import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Student Result Analyzer",
      description:
        "Analyzes student performance using charts, grade calculations, PDF reports and AI-driven insights.",
      tech: "HTML • CSS • JavaScript • Chart.js • jsPDF",

      github:
        "https://github.com/ashwini-s2004/AI-Powered-Student-Result-Analyzer",

      demo:
        "https://github.com/ashwini-s2004/AI-Powered-Student-Result-Analyzer",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    },

    {
      title: "Bank Management System",

      description:
        "Java Swing banking application supporting deposits, withdrawals, transfers and transaction tracking.",

      tech: "Java • Swing • OOP • SHA-256",

      github:
        "https://github.com/ashwini-s2004/Banking_System_Management-using-Java",

      demo:
        "https://github.com/ashwini-s2004/Banking_System_Management-using-Java",

      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    },

    {
      title: "Student Registration Form",

      description:
        "Modern Java Swing registration system with validation and responsive GUI design.",

      tech: "Java • Swing • OOP",

      github:
        "https://github.com/ashwini-s2004/Student-Registration-Form-Java-Swing-GUI-",

      demo:
        "https://github.com/ashwini-s2004/Student-Registration-Form-Java-Swing-GUI-",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    },

    {
      title: "Retail Inventory Analytics",

      description:
        "Inventory analytics dashboard identifying sales trends, supplier performance and stock optimization.",

      tech: "Python • Pandas • NumPy • Matplotlib",

      github:
        "https://github.com/ashwini-s2004/Retail-Inventory-Analytics",

      demo:
        "https://github.com/ashwini-s2004/Retail-Inventory-Analytics",

      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
    },
  ];

  return (
    <section className="projects" id="projects">
      <span className="section-tag">PROJECTS</span>

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="section-subtitle">
        A collection of projects showcasing my development,
        analytics and problem-solving skills.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech-stack">
                {project.tech}
              </span>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;