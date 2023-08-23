import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}
