import React from "react";
import classNames from "classnames/bind";
import { BiSearchAlt } from "react-icons/bi";
import style from "./formSearch.module.css";

const cx = classNames.bind(style);

function FormSearch() {
  return (
    <form action="" className={cx("form-search")}>
      <input type="text" />
      <button className={cx("search-btn")}>
        <BiSearchAlt style={{ width: "20px", height: "20px" }} />
      </button>
    </form>
  );
}

export default FormSearch;
