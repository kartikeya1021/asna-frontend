import api from "./api";

const TaskService = {
  create: (data) => {
    return api.post("/task", data);
  },
  get: (id) => {
    return api.get(`/task/${id}`,data);
  },
  update: (data,id) => {
    return api.put(`/task/${id}`, data);
  },

};

export default TaskService;