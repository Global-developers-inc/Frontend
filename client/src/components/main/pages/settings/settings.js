import React from "react";
import classNames from "classnames/bind";
import {
  MdNotificationsActive,
  MdMemory,
  MdBluetoothSearching,
} from "react-icons/md";
import { BsFillDisplayFill } from "react-icons/bs";
import { ImPrinter } from "react-icons/im";
import { FaLanguage } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";

import style from "./settings.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);
const listOfSettings = [
  {
    setting: "Display Color",
    path: "/diplay_color",
    icon: <BsFillDisplayFill />,
  },
  {
    setting: "Time and Date",
    path: "/tame_date",
    icon: <MdNotificationsActive />,
  },
  {
    setting: "Language",
    path: "/language",
    icon: <FaLanguage />,
  },
  {
    setting: "Sound",
    path: "/sound",
    icon: <GiSoundOn />,
  },
  {
    setting: "Printers",
    path: "/printers",
    icon: <ImPrinter />,
  },
  {
    setting: "Sequrity",
    path: "/sequrity",
    icon: <MdNotificationsActive />,
  },
  {
    setting: "Bluetooth",
    path: "/bluetooth",
    icon: <MdBluetoothSearching />,
  },
  {
    setting: "Notifications",
    path: "/notifications",
    icon: <MdNotificationsActive />,
  },
  {
    setting: "Memory",
    path: "/memory",
    icon: <MdMemory />,
  },
];
function Settings() {
  const storeColor = useSelector((store) => store.actualColor.color);

  const [color, setColor] = React.useState(storeColor);

  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);

  return (
    <div className={cx("settings")}>
      {listOfSettings.map((el) => (
        <Link to={el.path}>
          <div className={cx("btn")} style={{ backgroundColor: color }}>
            <h6>
              <h2>{el.icon}</h2>
              {el.setting}
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Settings;
