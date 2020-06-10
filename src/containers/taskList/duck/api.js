import { apiUtil } from "../../../modules/utils";
import { taskListMapper } from "./mappers";

const endpoints = {
  TASK_LIST: "https://api.github.com/search/repositories?q=created"
};

export const fecthTaskList = () => {
  const options = {};
  const payload = {};
  return apiUtil.get(endpoints.TASK_LIST, payload, options);
};
