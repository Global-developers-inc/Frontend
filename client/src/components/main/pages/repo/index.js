import React from "react";
import classNames from "classnames/bind";

import style from "./repo.module.css";
const cx = classNames.bind(style);
function Repo() {
  const [repo, setRepo] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:5000/repo")
      .then((response) => response.json())
      .then((json) => setRepo(json))
      .catch((error) => console.log("Authorization failed : " + error.message));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/repo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...repo,
      }),
    });
    console.log(res);
  }

  console.log(repo);

  return (
    <>
      {repo.length ? (
        <div className={cx("repo")} onClick={handleSubmit} value={repo.base}>
          {repo.base}
        </div>
      ) : (
        <div className={cx("repo")} onClick={handleSubmit} value={repo.base}>
          Red-os
        </div>
      )}
    </>
  );
}

export default Repo;
