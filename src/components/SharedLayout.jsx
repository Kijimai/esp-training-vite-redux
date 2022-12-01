import { Outlet } from "react-router-dom"
import Navigator from "./navigator/Navigator"
import Footer from "./footer/Footer"

const SharedLayout = () => {
  return (
    <main>
      <Navigator />
      <Outlet />
      <Footer />
    </main>
  )
}

export default SharedLayout
