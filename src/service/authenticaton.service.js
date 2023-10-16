import api from "./api";

const AuthenticationService = {
  login : (email,password) => {
    return api.post("/auth/login", {email,password});
  },
  register : (email,userName,password,name) => {
    return api.post("/auth/register", {email,userName,password,name});
  },
};

export default AuthenticationService;