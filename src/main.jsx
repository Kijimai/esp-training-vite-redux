import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import App from "./App"
import "./index.css"

const router = createBrowserRouter([
  { path: "/", element: <div>Hello Main Page</div> },
  { path: "/sample", element: <div>Hello sample page</div> },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
