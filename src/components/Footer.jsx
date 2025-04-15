import React from "react";
import "./Footer.css";

function Footer({ footerText }) {
  return (
    <footer className="footer">
      <p>{footerText}</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="separator">|</span>
        <a
          href="https://www.behance.net/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
      </div>
    </footer>
  );
}

export default Footer;
