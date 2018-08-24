import { fork } from "redux-saga/effects";
import { sagas as taskListWactherSagas } from "../containers/taskList/duck";

export default function* rootSaga() {
  for (let saga of taskListWactherSagas) {
    yield fork(saga);
  }
}
