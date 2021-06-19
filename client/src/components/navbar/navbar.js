import React from "react";
import classNames from "classnames/bind";

import { SiGravatar } from "react-icons/si";
import { AiFillSignal } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FaQuestion } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./navbar.module.css";
const cx = classNames.bind(style);
const content = [
  { href: "/", icon: <TiHomeOutline className={cx("icons")} />, title: "Home" },
  {
    href: "/settings",
    icon: <IoSettingsOutline className={cx("icons")} />,
    title: "Settings",
  },
  {
    href: "/profile",
    icon: <CgProfile className={cx("icons")} />,
    title: "Profile",
  },
  {
    href: "/analitics",
    icon: <AiFillSignal className={cx("icons")} />,
    title: "Analitics",
  },
  {
    href: "/contacts",
    icon: <RiContactsBookLine className={cx("icons")} />,
    title: "Contacts",
  },
  {
    href: "/faq",
    icon: <FaQuestion className={cx("icons")} />,
    title: "FAQ",
  },
  {
    href: "/exit",
    icon: <SiGravatar className={cx("icons")} />,
    title: "Exit",
  },
];
function Navbar() {
  const [active, setActive] = React.useState("navbar");
  const handleClickMenu = () => {
    setActive((prev) => (prev === "navbar" ? "navbar-active" : "navbar"));
  };

  const storeColor = useSelector((store) => store.actualColor);

  const [color, setColor] = React.useState(storeColor);

  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);

  return (
    <div className={cx(active)} style={{ backgroundColor: color }}>
      <button type="button" onClick={handleClickMenu}>
        <GiHamburgerMenu className={cx("burger")} />
      </button>
      <ul>
        {active === "navbar-active"
          ? content.map((el) => (
              <li key={el.href}>
                <Link to={el.href}>
                  {el.icon}
                  {el.title}
                </Link>
              </li>
            ))
          : content.map((el) => (
              <li key={el.href}>
                <Link to={el.href}>{el.icon}</Link>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Navbar;
