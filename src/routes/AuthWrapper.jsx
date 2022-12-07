import { useAuth0 } from "@auth0/auth0-react"
import Loading from "../components/Loading"
import styled from "styled-components"

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return (
      <Wrapper>
        <Loading type="cylon" />
      </Wrapper>
    )
  }

  if (error) {
    return (
      <Wrapper>
        <h2>Something went wrong...</h2>
        <h3>{error.message}</h3>
      </Wrapper>
    )
  }

  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
