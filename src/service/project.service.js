import api from "./api";

const ProjectService = {
  create: (data) => {
    return api.post("/Project", data);
  },
  update: (data, id) => {
    return api.put(`/Project/${id}`, data);
  },
  get: (id) => {
    return api.get(`/Project/${id}`);
  },
};

export default ProjectService;
