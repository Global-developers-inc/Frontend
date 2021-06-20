import React from "react";
import { Switch, Route } from "react-router-dom";
import Analitics from "./pages/analitics";
import Exit from "./pages/exit/exit";
import Faq from "./pages/faq";
import Home from "./pages/home/home";
import Profile from "./pages/profile/index";
import Settings from "./pages/settings/settings";
import classNames from "classnames/bind";

import style from "./main.module.css";
import Contacts from "./pages/contacts";
import DisplayColor from "./pages/settings/displayColor";
const cx = classNames.bind(style);
function Main() {
  const [visibleSettingsList, setVisibleSettinsList] = React.useState(true);

  return (
    <div>
      <Switch>
        <div className={cx("container")}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/settings">
            <Settings
              visibleSettingsList={visibleSettingsList}
              setVisibleSettinsList={setVisibleSettinsList}
            />
          </Route>
          <Route path="/diplay_color">
            <DisplayColor setVisibleSettinsList={setVisibleSettinsList} />
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/analitics" component={Analitics} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/faq" component={Faq} />
          <Route path="/exit" component={Exit} />
        </div>
      </Switch>
    </div>
  );
}

export default Main;
