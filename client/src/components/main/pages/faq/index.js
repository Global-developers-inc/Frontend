import React from "react";
import classNames from "classnames/bind";

import style from "./faq.module.css";
const cx = classNames.bind(style);
function Faq() {
  return <h1 className={cx("Faq")}>Faq</h1>;
}

export default Faq;
