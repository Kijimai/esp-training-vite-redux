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
    <SidebarWrapper
      onClick={(e) => {
        dispatch(hideSidebar())
      }}
    >
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
        <nav>
          <Link>
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

  button {
    border: none;
    background-color: transparent;
  }

  .inner-sidebar {
    height: 100%;
    width: 400px;
    background-color: grey;

    h1 {
      font-family: "Jura";
    }

    .nav-close {
      margin-left: auto;
    }
  }

  .nav-close {
    height: 40px;
  }
`

export default Sidebar
