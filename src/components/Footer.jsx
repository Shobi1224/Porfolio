export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small>© {year} Shobiga. All rights reserved.</small>
        <div className="footer__icons">
          <a
            href="https://github.com/Shobi122"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/shobiga-y-b6b5b8257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="mailto:shobidass1224@example.com" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}
