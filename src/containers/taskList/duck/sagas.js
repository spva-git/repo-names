import { put, call, takeLatest } from "redux-saga/effects";
import types from "./types";
import actions from "./actions";
import { appActions } from "../../../modules/duck";
import * as api from "./api";

function* loadTaskList() {
  try {
    const response = yield call(api.fecthTaskList);
    yield put(actions.receiveTaskList({ response }));
  } catch (e) {
    console.error("Error encountered : ", e.message);
    yield put(appActions.serviceErrorReceived({ errorMessage: e.message }));
  }
}

function* watchloadTaskList() {
  yield takeLatest(types.REQUEST_TASK_LIST, loadTaskList);
}

export default [watchloadTaskList];
