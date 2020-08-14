import React from "react";
import style from "./Main.module.scss";
import pacman from "../../image/pacman.svg";

const Main = () => (
  <main>
    <div className={style.wrapperBlock}>
      <img className={style.headpiece} src={pacman} alt="pacman" />
      <div className={style.mainContent}>
        <h1>Projects</h1>
        <p>
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
    </div>
  </main>
);

export default Main;
