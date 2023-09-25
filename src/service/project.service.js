import api from "./api";

const ProjectService = {
  create: (data) => {
    return api.post("/project", data);
  },
  update: (id, data) => {
    return api.put(`/project/${id}`, data);
  },
  get: (id) => {
    return api.get(`/project/${id}`);
  },
};

export default ProjectService;
