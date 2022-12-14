import { useState } from "react"
import styled from "styled-components"
import { coachInfo } from "../../links"
import { updateCoachId } from "../../features/dashboard/dashboardSlice"
import { useDispatch } from "react-redux"

const CoachChoices = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(updateCoachId(value))
  }

  return (
    <Wrapper>
      <div className="inner-coach-selection">
        <h4>Select the coach you would like a session with</h4>
        <form className="coach-form">
          <label>Coach List: </label>
          <select onChange={(e) => handleChange(e)}>
            {coachInfo.map((coach) => {
              const { name, isAvailable, id } = coach
              return (
                <option key={id} value={id} disabled={!isAvailable}>
                  {name}
                  {!isAvailable && " -- CURRENTLY BOOKED"}
                </option>
              )
            })}
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: purple;
  padding: 2rem;
  grid-column: 3 / 5;
  font-size: 1.6rem;

  .inner-coach-selection {
    color: white;
    height: 100%;

    h4 {
      margin: 1rem 0;
    }

    .coach-form {
      display: flex;
      flex-direction: column;

      select {
        max-width: 40rem;
        cursor: pointer;
        padding: 1rem;
      }
    }
  }
`
export default CoachChoices
