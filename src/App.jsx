import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import {
  Main,
  Payment,
  Purchase,
  Services,
  Team,
  Dashboard,
  PrivateRoute,
} from "./routes/index"
import Sidebar from "./components/navigator/Sidebar"
import { useSelector } from "react-redux"
import AuthWrapper from "./routes/AuthWrapper"

// Toast popup dependencies
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// Splide Styling
import "@splidejs/react-splide/css"

const App = () => {
  const { isShowing } = useSelector((state) => state.sidebar)

  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="payment" element={<Payment />} />
            <Route path="purchase" element={<Purchase />} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthWrapper>
      {isShowing && <Sidebar />}
    </Router>
  )
}

export default App
