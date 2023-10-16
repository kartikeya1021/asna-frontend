import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import HomeClone from "./pages/home/home.clone";
import ProjectContext from "./context/Project.context";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

export function App() {
  const [projectData, setProjectData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );
  const [authenticationRoute, setAuthenticationRoute] = useState([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/project/:id",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/home-clone",
      element: <HomeClone />,
    },
  ]);
  const [nonauthenticationRoute, setNonauthenticationRoute] = useState([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  const router = createBrowserRouter(
    isAuthenticated ? authenticationRoute : nonauthenticationRoute
  );
  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(projectData));
    console.log("projectData", projectData);
  }, [projectData]);
  useEffect(() => {
    let checkInLocalStorage = localStorage.getItem("projectData");
    if (checkInLocalStorage) {
      setProjectData(JSON.parse(checkInLocalStorage));
    }
  }, []);
  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      <RouterProvider router={router} />
    </ProjectContext.Provider>
  );
}
