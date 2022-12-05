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
        <Link className="site-logo" to="/">
          <Logo />
          <h1>Legend Trainer</h1>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link, idx) => {
            const { name, path } = link
            return (
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive
                        ? "hsl(var(--clr-orange))"
                        : "hsl(var(--clr-white))",
                    }
                  }}
                  key={idx}
                  to={path}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          className="nav-open"
          onClick={() => {
            dispatch(showSidebar())
          }}
        >
          <NavOpen color="#fff" />
        </button>
      </nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  max-width: 73%;
  margin: 0 auto;
  padding: 2rem 0;

  a {
    text-decoration: none;
  }

  nav {
    display: grid;
    grid-template-columns: 12rem 1fr 12rem;
    justify-content: flex-start;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
    }

    h1 {
      color: hsl(var(--clr-white));
      font-family: "Jura", "Open Sansu", sans-serif;
    }

    .site-logo {
      grid-column: 1 / 2;
    }

    .nav-links {
      grid-column: 2 / 3;
      display: flex;
      justify-content: center;
      gap: 2rem;

      a {
        font-size: 2rem;

        &:hover {
          color: hsl(var(--clr-lightblue)) !important;
        }
      }
    }
  }

  .nav-open {
    display: none;
    svg {
      height: 40px;
    }
  }

  @media only screen and (max-width: 1000px) {
    nav {
      display: flex;
      justify-content: space-between;

      .site-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          width: 8rem;
        }
        h1 {
          font-size: 1.4rem;
        }
      }

      .nav-links {
        display: none;

        a {
          font-size: 1.6rem;
        }
      }
      .nav-open {
        display: block;
      }
    }
  }
`

export default Navigator
