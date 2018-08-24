import types from "./types";

export default {
  requestTaskList: () => ({ type: types.REQUEST_TASK_LIST }),
  receiveTaskList: payload => ({ type: types.RECEIVE_TASK_LIST, payload })
};
