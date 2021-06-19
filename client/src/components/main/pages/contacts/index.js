import React from "react";
import classNames from "classnames/bind";
import { Card, Button } from "react-bootstrap";

import style from "./contacts.module.css";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);
function Contacts() {
  const storeColor = useSelector((store) => store.actualColor.color);

  const [color, setColor] = React.useState(storeColor);

  React.useEffect(() => {
    setColor(storeColor);
  }, [storeColor]);

  return (
    <div className={cx("contacts")}>
      <Card style={{ width: "18rem" }} className={cx("card")}>
        <Card.Body>
          <Card.Title>
            Контакты Приобретение РЕД ОС и коммерческое партнёрство
          </Card.Title>
          <Card.Text>
            Для получения лицензий, установления коммерческого партнёрства,
            заключения договора на техническую поддержку просим обращаться на
            электронный адрес
          </Card.Text>
          <Button style={{ width: "100%", backgroundColor: color, border: "none" }}>
            redos@red-soft.ru
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className={cx("card")}>
        <Card.Body>
          <Card.Title>
            Технологическое партнёрство и обучение РЕД ОС{" "}
          </Card.Title>
          <Card.Text>
            По вопросам установления технологического партнёрства и по вопросам,
            связанным с организацией обучения РЕД ОС, просим обращаться на
            электронный адрес
          </Card.Text>
          <Button
            style={{ width: "100%", backgroundColor: color, border: "none" }}
          >
            partner@red-soft.ru
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className={cx("card")}>
        <Card.Body>
          <Card.Title>
          Техническая поддержка 
          </Card.Title>
          <Card.Text>
          При обращении в техническую поддержку необходимо указать номер лицензии РЕД ОС и/или полное наименование или ИНН организации.
          По вопросам оказания технической поддержки просим обращаться на электронный адрес
          </Card.Text>
          <Button
            style={{ width: "100%", backgroundColor: color, border: "none" }}
          >
            redos.support@red-soft.ru
          </Button>
        </Card.Body>
      </Card>
 
    </div>
  );
}

export default Contacts;
