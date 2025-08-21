export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section__title">Let's Work Together</h2>
        <p className="muted center max-600">
          I'm always interested in new opportunities and interesting projects.
          Let's connect and discuss how we can bring your ideas to life.
        </p>

        <div className="cta">
          <a className="btn primary" href="mailto:your.email@example.com">
            <span className="btn__icon">✉</span> Send Email
          </a>
          <a
            className="btn outline"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="contact__details">
          <a href="mailto:shobidass1224@gmail.com">shobidass1224@gmail.com</a>
          <span>+91 98765 43210</span>
        </div>
      </div>
    </section>
  );
}
