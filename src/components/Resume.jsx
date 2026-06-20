function Resume() {
  return (
    <section id="resume" className="resume-section">
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="700"
        style={{
          border: "none",
          borderRadius: "12px"
        }}
      />
    </section>
  );
}

export default Resume;