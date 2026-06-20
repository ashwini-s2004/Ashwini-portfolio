import { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: "C", level: "90%" },
    { name: "C++", level: "85%" },
    { name: "Java", level: "92%" },
    { name: "C#", level: "80%" },
    { name: "MongoDB", level: "85%" },
    { name: "SQL", level: "90%" },
    { name: "Power BI", level: "88%" },
  ];

  return (
    <section
      className="skills"
      id="skills"
      ref={skillsRef}
    >
      <span className="section-tag">
        SKILLS
      </span>

      <h2 className="section-title">
        Technical <span>Expertise</span>
      </h2>

      <p className="section-subtitle">
        Technologies and tools I use to build modern
        applications and data-driven solutions.
      </p>

      <div className="skills-container">

        <div className="skills-left">

          <h3>Technical Skills</h3>

          {technicalSkills.map((skill, index) => (
            <div
              className="skill-item"
              key={index}
            >
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: animate
                      ? skill.level
                      : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}

        </div>

        <div className="skills-right">

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-tags">
              <span>C</span>
              <span>C++</span>
              <span>Java</span>
              <span>C#</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-tags">
              <span>MongoDB</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Data Analytics & Tools</h3>

            <div className="skill-tags">
              <span>Power BI</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Areas of Interest</h3>

            <div className="skill-tags">
              <span>Data Analytics</span>
              <span>Full Stack Development</span>
              <span>Web Development</span>
              <span>UI Design</span>
              <span>Database Systems</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;