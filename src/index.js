//import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux";
import { TaskList } from "./containers";

const store = configureStore();
const AppRoot = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TaskList />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<AppRoot />, document.getElementById("root"));
//registerServiceWorker();
