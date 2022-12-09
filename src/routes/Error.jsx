import styled from "styled-components"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <Wrapper>
      <h2>Error!</h2>
      <h3>This page does not exist!</h3>
      <Link className="btn" to="/">
        Back to home page
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  color: hsl(var(--clr-white));
  text-align: center;
  h2 {
    font-size: 6rem;
  }
  h3 {
    font-size: 2rem;
  }
  a {
    font-size: 1.6rem;
  }
`

export default Error
