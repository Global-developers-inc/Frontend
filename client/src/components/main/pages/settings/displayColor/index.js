import React from "react";
import { useHistory } from "react-router";
import classNames from "classnames/bind";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import style from "./displayColor.module.css";
import img from "./first_color.png";
import img2 from "./second_color.png";
import Button from "../../../../common/button";
import { useDispatch } from "react-redux";

import {
  changeColorMain,
  changeColorSecond,
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


  };


  // const [test, setTest] = React.useState(null);
  // const pageRandom = Math.floor(Math.random() * 10);
  // React.useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pageRandom}`)
  //     .then((response) => response.json())
  //     .then((json) => setTest(json));
  // }, []);
  // console.log(test);


	
// 	async function handleSubmit(event) {
//     event.preventDefault();
//     const res = await fetch('/send_message', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         message
//       })
//     })
//     if (res.status === 200) {
		
//     }
//     else if (res.status === 406) {
//     }
//   }

  return (
    <div className={cx("container-diplay-color")}>
      <Button
        className={cx("button-back")}
        icon={<IoArrowBackCircleSharp />}
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
      </div>
    </div>
  );
}

export default DisplayColor;
