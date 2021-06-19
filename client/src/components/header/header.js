import React from "react";
import Navbar from "../navbar/navbar";
import classNames from "classnames/bind";
import logo from "./redoslogo2.png";
import { useSelector } from "react-redux";

import style from "./header.module.css";
import FormSearch from "./formSearch/formSearch";

const cx = classNames.bind(style);

function Header() {
  const storeColor = useSelector((store) => store.actualColor);

  const [color, setColor] = React.useState(storeColor);

  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);
  return (
    <>
      <header className={cx("header")} style={{ backgroundColor: `${color}` }}>
        <img src={logo} alt="logo" className={cx("logo")} />
        <FormSearch storeColor={storeColor} />
      </header>
      <Navbar />
    </>
  );
}

export default Header;
