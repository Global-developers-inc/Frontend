import React from "react";
import classNames from "classnames/bind";

import style from "./home.module.css";
const cx = classNames.bind(style);
function Home() {
  return (
    <div className={cx("home")}>
      <h1 className={cx("title")}>Мастер настройки РЕД ОС</h1>
      <p>
        После установки требуется выполнить базовые настройки.
        Данный интерфейс, поможет пройти все этапы, напомнит что нужно
        настроить и какие параметры применить.
      </p>
    </div>
  );
}

export default Home;
