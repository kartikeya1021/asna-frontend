import api from "./api";

// const API_URL = 'http://localhost:3000/api';
const AuthenticationService = {
  login: (email, password) => {
    return api.post("/auth/login", { email, password });
  },
  register: (name, userName, email, password) => {
    return api.post("/auth/register", { name, userName, email, password });
  },
};
export default AuthenticationService;
