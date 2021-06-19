import React from "react";
import classNames from "classnames/bind";
import style from "./buttonStyle.module.css";

const cx = classNames.bind(style);

function Button({ icon, title, onClick }) {
  return (
    <button type="button" onClick={onClick} className={cx("btn")}>
      {icon}
      {title}
    </button>
  );
}

export default Button;
