import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import { Main, Payment, Login, Purchase, Services, Team } from "./routes/index"
import Sidebar from "./components/navigator/Sidebar"
import { useSelector } from "react-redux"
import AuthWrapper from "./routes/AuthWrapper"
const App = () => {
  const { isShowing } = useSelector((state) => state.sidebar)

  return (
    <Router>
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="payment" element={<Payment />} />
            <Route path="purchase" element={<Purchase />} />
          </Route>
        </Routes>
      </AuthWrapper>
      {isShowing && <Sidebar />}
    </Router>
  )
}

export default App
