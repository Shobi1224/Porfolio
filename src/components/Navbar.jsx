import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand">
          Portfolio
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>
          <a
            className="icon-btn"
            href="https://github.com/Shobi1224"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            {/* GitHub icon */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.3 9.2 7.9 10.7.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.3a12.1 12.1 0 0 1 6.4 0C18 5 19 5.3 19 5.3c.6 1.7.2 3 .1 3.3.8.9 1.2 2.1 1.2 3.4 0 4.4-2.8 5.5-5.4 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.8.9.6A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7z" />
            </svg>
          </a>
          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/shobiga-y-b6b5b8257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.9-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.5V24h-4v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V24h-4V8.5z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
