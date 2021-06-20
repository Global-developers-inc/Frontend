import React from "react";
import classNames from "classnames/bind";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import style from "./profile.module.css";

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: "100px",
    height: "100px",
  },
};
const cx = classNames.bind(style);
export default function Profile() {
  return (
    <h1 className={cx("home")}>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={styles.bigAvatar}
          style={styles.bigAvatar}
        />
        Name Surname
      </Grid>
    </h1>
  );
}
