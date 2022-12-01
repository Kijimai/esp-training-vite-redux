import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import { Main, Payment, Login, Purchase } from "./routes/index"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
