import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Development",
      company: "Learning Journey",
      period: "2023 - Present",
      desc: "Building MERN applications, responsive websites and modern UI experiences using React and Node.js.",
    },
    {
      title: "Data Analytics",
      company: "Academic Projects",
      period: "2024 - Present",
      desc: "Working with Python, Power BI, Pandas, NumPy and visualization tools for analytics projects.",
    },
    {
      title: "Java Development",
      company: "Personal Projects",
      period: "2023 - Present",
      desc: "Developed desktop applications using Java Swing, JDBC and Object-Oriented Programming.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">

        <span className="section-tag">
          EXPERIENCE
        </span>

        <h2 className="section-title">
          Professional <span>Journey</span>
        </h2>

        <p className="section-subtitle">
          My learning and development journey.
        </p>

        <div className="experience-grid">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-top">
                <h3>{item.title}</h3>

                <span>{item.period}</span>
              </div>

              <h4>{item.company}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;