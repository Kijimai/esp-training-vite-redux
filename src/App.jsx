import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import { Main, Payment, Login, Purchase, Services } from "./routes/index"
import Sidebar from "./components/navigator/Sidebar"
import { useSelector } from "react-redux"

const App = () => {
  const { isShowing } = useSelector((state) => state.sidebar)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="payment" element={<Payment />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
      {isShowing && <Sidebar />}
    </Router>
  )
}

export default App
