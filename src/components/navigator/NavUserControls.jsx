import { useUserContext } from "../../context/UserProvider"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NavUserControls = () => {
  const { loginWithRedirect, user, logout } = useUserContext()

  return (
    <NavUserControlsWrapper>
      {user && (
        <Link to="dashboard">
          <h3>Welcome, {user.nickname}</h3>
        </Link>
      )}

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </NavUserControlsWrapper>
  )
}

const NavUserControlsWrapper = styled.div`
  display: flex;
  gap: 1.4rem;

  h3 {
    color: hsl(var(--clr-white));
    font-family: "Open Sans", sans-serif;
  }

  button {
    color: hsl(var(--clr-white));
    font-size: 2rem;

    &:hover {
      color: hsl(var(--clr-lightblue));
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export default NavUserControls
