import React from "react";
import { useHistory } from "react-router";
import classNames from "classnames/bind";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import style from "./displayColor.module.css";
import img from "./first_color.png";
import img2 from "./second_color.png";
import img3 from "./third_color.png";
import Button from "../../../../common/button";
import { useDispatch, useSelector } from "react-redux";

import {
  changeColorMain,
  changeColorSecond,
  changeColorThird,
} from "../../../../../redux/actions/action";
const cx = classNames.bind(style);

function DisplayColor() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  const dispatch = useDispatch();

  const handleChangeColor = (e) => {
    if (e.target.name === "mainColor") {
      dispatch(changeColorMain("rgb(46, 46, 46)"));
    }
    if (e.target.name === "secondColor") {
      dispatch(changeColorSecond("#85a9d7"));
    }
    if (e.target.name === "thirdColor") {
      dispatch(changeColorThird("#404f49"));
    }
  };

  React.useEffect(() => {
    fetch("http://localhost:5000/repo")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log("Authorization failed : " + error.message));
  }, []);

  const storeColor = useSelector((store) => store.actualColor);

  const [color, setColor] = React.useState(storeColor);

  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);
  return (
    <div className={cx("container-diplay-color")}>
      <Button
        className={cx("button-back")}
        icon={
          <IoArrowBackCircleSharp style={{ fill: color, marginRight: "5px" }} />
        }
        title="Назад"
        onClick={handleClick}
      />
      <h1>Display Color</h1>
      <div className={cx("display-colors-list")}>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img} alt="img" name={"mainColor"} />
        </div>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img2} alt="" name={"secondColor"} />
        </div>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img3} alt="" name={"thirdColor"} />
        </div>
      </div>
    </div>
  );
}

export default DisplayColor;
