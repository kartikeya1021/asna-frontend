import api from "./api";

const ColumnService = {
  create: (data) => {
    return api.post(`/project/${data.projectId}/column`, data);
  },
  update: (projectId, columnId, taskName) => {
    return api.put(`/project/${projectId}/column/${columnId}`, {
      name: taskName,
    });
  },
};

export default ColumnService;
