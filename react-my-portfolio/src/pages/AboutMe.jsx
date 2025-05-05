import React from "react";
import './AboutMe.css'; 
import mePhoto from '../img/me-aboutme.png';

export default function AboutMe() {
  return (
    <div className="about-page">
      <section className="intro-section">
        <div className="about-content">
          <img src={mePhoto} alt="Ілона Ткаченко" className="about-photo" />
          <div>
            <h1>Вітаю! Я — Ілона Ткаченко</h1>
            <p>
               Початкова фронтенд-розробниця, якій подобається наводити порядок у коді та створювати зручні інтерфейси. <br />
               Захоплююся тим, як з простих блоків HTML, стилів і логіки можна створити щось красиве й функціональне.
               У роботі ціную чистоту коду, послідовність і доброзичливу співпрацю. Завжди прагну вчитись нового і вдосконалювати свої навички.
           </p>

          </div>
        </div>
      </section>

      <section>
        <h2>Цінності, захоплення, навчання</h2>
        <p>
          Вірю в чесність, взаємопідтримку та постійний розвиток. Мене захоплює дизайн, логіка і простота.
          Навчаюся самостійно через онлайн-курси та власні проєкти. <br /> Мене надихає працювати над чимось корисним та
          мати можливість поділитися своїми результатами з іншими. <br /> Крім того, я завжди готова навчатися новому і
          приймати виклики.
        </p>
      </section>

      <section>
        <h2>Мої проєкти</h2>

        <h3>HTML + CSS</h3>
        <div className="repo-buttons">
          <a href="https://github.com/Ilona-Tkachenko/layout_catalog" target="_blank" rel="noreferrer" className="repo-button">Catalog Layout</a>
          <a href="https://github.com/Ilona-Tkachenko/layout_landing-page" target="_blank" rel="noreferrer" className="repo-button">Landing Page</a>
        </div>

        <h3>JavaScript</h3>
        <div className="repo-buttons">
          <a href="https://github.com/Ilona-Tkachenko/js_style-to-object" target="_blank" rel="noreferrer" className="repo-button">Style to Object</a>
        </div>

        <h3>React</h3>
        <div className="repo-buttons">
          <a href="https://github.com/Ilona-Tkachenko/react-photo-gallery" target="_blank" rel="noreferrer" className="repo-button">Photo Gallery</a>
          <a href="https://github.com/Ilona-Tkachenko/react-router-practice" target="_blank" rel="noreferrer" className="repo-button">Router Practice</a>
        </div>
      </section>
    </div>
  );
}
