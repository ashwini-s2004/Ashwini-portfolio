import "./Experience.css";
import {
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

function Experience() {
  const journey = [
    {
      icon: <FaCode />,
      title: "Programming Journey",
      year: "2023",
      description:
        "Started learning C, C++, Java and problem-solving fundamentals.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      year: "2024",
      description:
        "Built responsive websites and modern user interfaces using React and JavaScript.",
    },

    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      year: "2025",
      description:
        "Worked on Power BI dashboards, SQL databases and analytics projects.",
    },

    {
      icon: <FaRocket />,
      title: "Project Development",
      year: "2026",
      description:
        "Developed portfolio projects including PlacementPro AI, Resume Screening System and Inventory Analytics.",
    },
  ];

  return (
    <section className="experience">

      <span className="section-tag">
        JOURNEY
      </span>

      <h2 className="section-title">
        My Learning <span>Journey</span>
      </h2>

      <p className="section-subtitle">
        A timeline of my growth in technology and development.
      </p>

      <div className="experience-grid">

        {journey.map((item, index) => (
          <div
            className="experience-card"
            key={index}
          >

            <div className="experience-icon">
              {item.icon}
            </div>

            <span className="experience-year">
              {item.year}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;