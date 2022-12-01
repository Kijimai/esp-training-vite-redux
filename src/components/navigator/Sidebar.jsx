import styled from "styled-components"
import Logo from "../../assets/icons/Logo"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../../links"
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link>
        <Logo />
        {navLinks.map((link, idx) => {
          const { name, path } = link
          return (
            <NavLink key={idx} to={path}>
              {name}
            </NavLink>
          )
        })}
      </Link>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div``

export default Sidebar
