import React from "react";
import "./MyFuture.css";

export default function MyFuture() {
  return (
    <div className="future-page">
      <section>
        <h1 className="main-title">Мій розвиток</h1>
        <p className="quote">
          "Не треба бути ідеальним — треба бути наполегливим."
        </p>
      </section>

      <section>
        <h2>3 кроки в майбутнє</h2>
        <ol>
          <li>Щоденна практика з React, JavaScript та сучасних технологій</li>
          <li>Проходження стажування або участь у реальних проєктах</li>
          <li>Створення сильного портфоліо та пошук роботи в IT-команді</li>
        </ol>
      </section>

      <section>
        <h2>Моя робота мрії</h2>
        <p>
          Я прагну працювати в команді, де цінується якість коду, співпраця та інновації.
          Мені важливо створювати інтерфейси, які вирішують реальні проблеми,
          виглядають сучасно та зрозумілі користувачам.
        </p>
      </section>

      <section className="inspiration-section">
        <h2>Натхнення</h2>
        <div className="inspiration-content">
          <div className="inspiration-text">
            <p className="inspiration-paragraph">
              Моє натхнення — це люди, які не зупиняються в розвитку.
              Також надихають красиві та інтуїтивні інтерфейси, глибоке занурення в UX/UI,
              нові технології та мої власні досягнення.
            </p>
            <p className="inspiration-paragraph">
              Я отримую мотивацію від змін: у собі, в знаннях і в тому, що я можу
              впливати на світ через код. Саме цей шлях — складний, але цікавий —
              і надихає мене щодня.
            </p>
            <p className="inspiration-paragraph">
              Іноді спроба поєднати HTML, CSS, JavaScript і бажання зробити все ідеально
              виглядає ось так:
            </p>
          </div>
          <div className="meme-wrapper">
            <img
              src="https://i.programmerhumor.io/2025/03/4c5643a9abba1473d8c41e73f2f4dcd7ebab13044a3267f780aeeb2867127d32.jpeg"
              alt="Frontend Meme"
              className="inspiration-meme"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>Мої улюблені інструменти</h2>
        <div className="tools-grid">
          <div className="tool-card">
           <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg" alt="VS Code" width="40" />
            <p>VS Code</p>
          </div>
          <div className="tool-card">
            <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" />
            <p>GitHub</p>
          </div>
          <div className="tool-card">
            <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" />
            <p>Figma</p>
          </div>
          <div className="tool-card">
            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
            <p>React</p>
          </div>
          <div className="tool-card">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg" alt="Canva" />
            <p>Canva</p>
          </div>

        </div>
      </section>

      <section>
        <h2>Якою я бачу себе через 3 роки</h2>
        <p>
          Я бачу себе впевненою фронтенд-розробницею, яка створює складні
          застосунки, розуміє архітектуру проєктів, веде менторство для новачків і
          працює в дружній команді, де кожен відчуває свою цінність.
        </p>
      </section>
    </div>
  );
}
