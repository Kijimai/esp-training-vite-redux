import styled from "styled-components"
import Logo from "../../assets/icons/Logo"
import NavClose from "../../assets/icons/NavClose"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../../links"
import { useDispatch } from "react-redux"
import { hideSidebar } from "../../features/sidebar/sidebarSlice"

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <SidebarWrapper>
      <div className="inner-sidebar">
        <button
          className="nav-close"
          type="button"
          onClick={() => {
            dispatch(hideSidebar())
          }}
        >
          <NavClose className="nav-close" />
        </button>
        <nav className="sidebar-nav">
          <Link
            onClick={() => {
              dispatch(hideSidebar())
            }}
          >
            <Logo />
            <h1>Legend Trainer</h1>
          </Link>
          <ul>
            {navLinks.map((link, idx) => {
              const { name, path, icon } = link
              return (
                <li>
                  <NavLink
                    key={idx}
                    to={path}
                    onClick={() => {
                      dispatch(hideSidebar())
                    }}
                  >
                    {icon}
                    {name}
                  </NavLink>
                </li>
              )
            })}
            <li>
              <NavLink>Login</NavLink>
            </li>
            <li>
              <NavLink>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(var(--clr-black) / 0.7);
  height: 100%;
  width: 100%;
  z-index: 9999;

  a {
    text-decoration: none;
    color: hsl(var(--white));
  }

  button {
    border: none;
    background-color: transparent;
  }

  .inner-sidebar {
    padding: 4rem 2rem;
    height: 100%;
    min-width: 30rem;
    width: 100%;
    max-width: 40rem;
    background: radial-gradient(#7aa3b1, #424242);

    h1 {
      font-family: "Jura";
      font-size: 3rem;
      color: hsl(var(--clr-white));
    }

    .nav-close {
      height: 4rem;
      display: block;
      margin-left: auto;

      svg {
        display: inline-block;
        color: hsl(var(--clr-white));
      }

      &:hover svg {
        color: hsl(var(--clr-orange));
      }
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      ul {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        li {
          a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-align: left;
            padding: 0 2rem;
            gap: 3rem;
            font-size: 3rem;
            color: hsl(var(--clr-white));
            transition: 0.2s ease color;
          }

          &:hover {
            background-color: hsl(var(--clr-black) / 0.4);

            a {
              color: hsl(var(--clr-orange));
            }
          }
        }
      }

      .icon {
        display: inline-block;
        height: 4rem;
      }
    }
  }
`

export default Sidebar
