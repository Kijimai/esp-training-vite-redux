import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../../links"
import Logo from "../../assets/icons/Logo"
const Navigator = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <Logo />
        <h1>Legend Trainer</h1>
      </Link>
      {navLinks.map((link, idx) => {
        const { name, path } = link
        return (
          <NavLink key={idx} to={path}>
            {name}
          </NavLink>
        )
      })}
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
`

export default Navigator
