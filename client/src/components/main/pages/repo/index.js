import React from "react";
import classNames from "classnames/bind";

import style from "./repo.module.css";
import { Form } from "react-bootstrap";
const cx = classNames.bind(style);
function Repo() {
  const [repo, setRepo] = React.useState([]);
  const [color, setColor] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:5000/repo")
      .then((response) => response.json())
      .then((json) => setRepo([json]))
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
    setColor((prev) => (prev === null ? `green` : null));
  }

  console.log(repo);

  return (
    <>
      {repo.length ? (
        repo.map((el) => (
          <>
            <div className={cx("repo")} value={repo.base}>
              <Form.Check aria-label={el.base[0]} onClick={handleSubmit} />
            </div>
            <div
              className={cx("repo")}
              onClick={handleSubmit}
              value={repo.base}
            >
              {el.base[1]}
            </div>
          </>
        ))
      ) : (
        <>
          <div className={cx("repo")} onClick={handleSubmit} value={repo.base}>
            Red-OS
          </div>
          <div className={cx("repo")} onClick={handleSubmit} value={repo.base}>
            Red-Update
          </div>
        </>
      )}
    </>
  );
}

export default Repo;
<>
  <Form.Check type="radio" aria-label="radio 1" />
</>;
