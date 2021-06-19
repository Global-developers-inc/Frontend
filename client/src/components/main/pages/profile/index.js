import React from "react";
import classNames from "classnames/bind";

import style from "./profile.module.css";
const cx = classNames.bind(style);
function Profile() {
  return <h1 className={cx("home")}>Home</h1>;
}

export default Profile;
