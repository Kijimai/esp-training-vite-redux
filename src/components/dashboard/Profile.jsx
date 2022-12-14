import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const { user } = useAuth0()

  return (
    <Wrapper>
      <div className="inner-profile">
        <img src={user.picture} />
        <h3>{user.nickname}</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  background-color: hsl(var(--clr-white));
  grid-row: 1 / 3;
  padding: 2rem;
  border-radius: 0.4rem;

  .inner-profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 2.6rem;
    }
  }
`

export default Profile
