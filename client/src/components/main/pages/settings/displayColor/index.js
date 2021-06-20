import React from "react";
import { useHistory } from "react-router";
import classNames from "classnames/bind";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import style from "./displayColor.module.css";
import img from "./first_color.png";
import img2 from "./second_color.png";
import img3 from "./third_color.png";
import img4 from "./blue_submarine.png";

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
    if (e.target.name === "BlackMATE") {
      dispatch(
        changeColorMain({ color: "rgb(46, 46, 46)", nameColor: "BlackMATE" })
      );
    }
    if (e.target.name === "TraditionalOk") {
      dispatch(
        changeColorSecond({ color: "#85a9d7", nameColor: "TraditionalOk" })
      );
    }
    if (e.target.name === "Green-Submarine") {
      dispatch(
        changeColorThird({ color: "#404f49", nameColor: "Green-Submarine" })
      );
    }
    if (e.target.name === "Blue-Submarine") {
      dispatch(
        changeColorThird({ color: "rgb(4,40,61)", nameColor: "Blue-Submarine" })
      );
    }
    setLoadColor(null);
  };
  const [loadColor, setLoadColor] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:5000/repo")
      .then((response) => response.json())
      .then((json) => setLoadColor(json))
      .catch((error) => console.log("Authorization failed : " + error.message));
  }, []);

  const storeColor = useSelector((store) => store.actualColor.color);
  const actualSendColor = useSelector((store) => store.actualColor);

  const [color, setColor] = React.useState(storeColor);
  console.log(color);
  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actualSendColor,
      }),
    });
    console.log(res);
  }

  return (
    <div className={cx("container-diplay-color")}>
      <Button
        className={cx("button-back")}
        icon={
          <IoArrowBackCircleSharp
            style={{ fill: loadColor ? loadColor : color, marginRight: "5px" }}
          />
        }
        title="Назад"
        onClick={handleClick}
      />
      <h1>Display Color</h1>
      <div className={cx("display-colors-list")}>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img} alt="img" name={"BlackMATE"} />
          <p>BlackMATE</p>
        </div>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img2} alt="" name={"TraditionalOk"} />
          <p>TraditionalOk</p>
        </div>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img3} alt="" name={"Green-Submarine"} />
          <p>Green-Submarine</p>
        </div>
        <div className={cx("display")} onClick={handleChangeColor}>
          <img src={img4} alt="" name={"Blue-Submarine"} />
          <p>Blue-Submarine</p>
        </div>
      </div>
      <button
        type="submit"
        className={cx("btn")}
        style={{ backgroundColor: loadColor ? loadColor : color }}
        onClick={handleSubmit}
      >
        Apply
      </button>
    </div>
  );
}

export default DisplayColor;
