import { combineReducers } from "redux";
import {colorReducer, colorActualReducer} from "./colorReducer";

const rootReducer = combineReducers({
  color: colorReducer,
  actualColor: colorActualReducer,
});

export default rootReducer;
