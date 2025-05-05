import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Ілона Ткаченко</p>

        <a
          href="https://github.com/Ilona-Tkachenko"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/7b6454/github.png"
            alt="GitHub"
            className="footer-icon"
          />
          <span>GitHub</span>
        </a>

        <a
          href="https://t.me/Ilonkkkaa"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/7b6454/telegram-app.png"
            alt="Telegram"
            className="footer-icon"
          />
          <span>Telegram</span>
        </a>

        <a
          href="https://www.instagram.com/iloskaa.a?igsh=MTMwNjB6eXZpeTB0OQ=="
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/7b6454/instagram-new.png"
            alt="Instagram"
            className="footer-icon"
          />
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
