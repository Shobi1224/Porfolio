import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills &amp; Technologies</h2>
        <p className="muted center">
          Here are some of the technologies I've been working with recently
        </p>

        <div className="chiplist">
          {skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
