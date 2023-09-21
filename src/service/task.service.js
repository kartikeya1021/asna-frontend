import api from "./api";

const TaskService = {
  create: (data) => {
    return api.post("/task", data);
  },
};

export default TaskService;