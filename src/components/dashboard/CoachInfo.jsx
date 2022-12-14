import { useState, useEffect } from "react"
import styled from "styled-components"
import { FaDiscord } from "react-icons/fa"
import { useSelector } from "react-redux"
import { coachInfo } from "../../links"
import { Link } from "react-router-dom"
import Loading from "../Loading"

const CoachInfo = () => {
  const [selectedCoach, setSelectedCoach] = useState({})
  const { coachId } = useSelector((state) => state.dashboard)

  const findCoach = () => {
    const foundCoach = coachInfo.find((coach) => {
      return coach.id === Number(coachId)
    })
    setSelectedCoach(foundCoach)
  }

  useEffect(() => {
    findCoach()
  }, [coachId])

  if (!coachId) {
    return (
      <Wrapper>
        <h4>No choices made yet...</h4>
      </Wrapper>
    )
  }

  if (!selectedCoach) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="selected-coach">
        <div className="coach-info">
          <h4>You have chosen:</h4>
          <img src={selectedCoach.avatar} />
          <p>{selectedCoach.name}</p>
        </div>
        <div className="contact">
          <p>Reach him through discord:</p>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: hsl(var(--clr-white));
  grid-column: 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.6rem;
  }

  .selected-coach {
  }
`

export default CoachInfo
