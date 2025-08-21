import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <p className="muted center">
          A showcase of my recent work and personal projects
        </p>

        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <div className="card__media">
                <div className="code-icon">&lt;&gt;</div>
              </div>

              <div className="card__body">
                <h3 className="card__title">{p.title}</h3>
                <p className="muted">{p.description}</p>
                <div className="chiplist small">
                  {p.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card__actions">
                  {p.demo && (
                    <a
                      className="btn sm primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.code && (
                    <a
                      className="btn sm outline"
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
