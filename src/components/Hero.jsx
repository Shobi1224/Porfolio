import profile from "../images/profile.jpg";
export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="container hero__inner">
        {/* Circle with photo */}
        <div className="hero__icon">
          <img src={profile} alt="Shobiga profile" />
        </div>

        <h1 className="hero__title">
          Hi, I'm <span className="accent">Shobiga</span>
        </h1>

        <p className="lead">
          Java Developer passionate about creating beautiful, functional web
          applications that solve real-world problems and deliver exceptional
          user experiences.
        </p>

        <div className="cta">
          <a className="btn primary" href="#projects">
            View My Work
          </a>
          <a className="btn outline" href="/cv/Shobiga_Resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
