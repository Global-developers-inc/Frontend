import React from "react";
import classNames from "classnames/bind";

import style from "./analitics.module.css";
const cx = classNames.bind(style);
function Analitics() {
  return <h1 className={cx("Analitics")}>Analitics</h1>;
}

export default Analitics;
