import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../../links"
import { useDispatch } from "react-redux"
import { showSidebar } from "../../features/sidebar/sidebarSlice"
import NavOpen from "../../assets/icons/NavOpen"
import Logo from "../../assets/icons/Logo"

const Navigator = () => {
  const dispatch = useDispatch()

  return (
    <NavWrapper>
      <nav>
        <Link to="/">
          <Logo />
          <h1>Legend Trainer</h1>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link, idx) => {
            const { name, path } = link
            return (
              <li>
                <NavLink key={idx} to={path}>
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          onClick={() => {
            dispatch(showSidebar())
          }}
        >
          <NavOpen className="nav-open" color="#fff" />
        </button>
      </nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  padding: 2rem 0;
  a {
    text-decoration: none;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
    }

    h1 {
      color: hsl(var(--clr-white));
      font-family: "Jura", "Open Sans", sans-serif;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;

      a {
        color: hsl(var(--clr-white));
        font-size: 2rem;
      }
    }
  }

  .nav-open {
    height: 40px;
  }
`

export default Navigator
