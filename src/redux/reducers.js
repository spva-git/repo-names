import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import taskList from "../containers/taskList/duck";

const rootReducer = combineReducers({
  form: formReducer,
  taskList
});

export default rootReducer;
