import React from "react";
import classNames from "classnames/bind";

import style from "./home.module.css";
const cx = classNames.bind(style);
function Home() {
  return <h1 className={cx("home")}>Home</h1>;
}

export default Home;
