import { Outlet } from "react-router-dom"
import Navigator from "./navigator/Navigator"
import Footer from "./footer/Footer"

const SharedLayout = () => {
  return (
    <main>
      <Navigator />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  )
}

export default SharedLayout
