import { Outlet } from "react-router-dom"
import Navigator from "./navigator/Navigator"
import Footer from "./footer/Footer"

const SharedLayout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout
