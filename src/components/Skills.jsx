import { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills & Technologies</h2>
        <p className="muted center">
          Here are some of the technologies I've been working with recently
        </p>

        <div className="chiplist">
          {skills.map((s) => (
            <span key={s._id} className="chip">
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
