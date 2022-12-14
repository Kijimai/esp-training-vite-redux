import styled from "styled-components"
import Profile from "../components/dashboard/Profile"
import CoachChoices from "../components/dashboard/CoachChoices"
import CoachInfo from "../components/dashboard/CoachInfo"

import { useAuth0 } from "@auth0/auth0-react"
const Dashboard = () => {
  const { user } = useAuth0()

  return (
    <Wrapper>
      <div className="inner-dashboard">
        <Profile />
        <CoachChoices />
        <CoachInfo />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 60vh;

  .inner-dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, minmax(20rem, 1fr));
    gap: 1rem;
  }
`

export default Dashboard
