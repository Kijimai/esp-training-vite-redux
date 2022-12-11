import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { formatPrice } from "../../utils/helper"
import { FaCheck } from "react-icons/fa"
import { useUserContext } from "../../context/UserProvider"
import { useAuth0 } from "@auth0/auth0-react"

const PurchaseCard = ({ title, cost, offers, bannerColor, userType }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()

  return (
    <CardWrapper>
      <header style={{ backgroundColor: bannerColor }}>
        <h3>
          {title} / {formatPrice(cost)}
        </h3>
      </header>
      <ul className="offers-list">
        {offers.map((offer, idx) => {
          return (
            <li key={idx}>
              <FaCheck className="icon" />
              {offer}
            </li>
          )
        })}
      </ul>
      <footer>
        <button
          onClick={() => {
            navigate(`${userType}`)
          }}
        >
          Select
        </button>
      </footer>
    </CardWrapper>
  )
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: hsl(var(--clr-white));
  padding: 2rem;
  border-radius: 0.8rem;

  header {
    color: hsl(var(--clr-white));
    padding: 1rem 1.5rem;
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 600px) {
      margin-bottom: 1rem;
    }
  }

  .offers-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 1rem 0;

    li {
      display: grid;
      grid-template-columns: 2rem 1fr;
      align-items: center;
    }
  }

  .icon {
    color: green;
    margin-right: 1rem;
  }

  footer {
    margin-top: auto;

    button {
      display: block;
      border: none;
      background-color: hsl(var(--clr-lightblue));
      color: hsl(var(--clr-white));
      font-weight: 700;
      font-size: 2rem;
      width: 100%;
      padding: 1rem;
    }
  }
`

PurchaseCard.defaultProps = {
  title: "N/A",
  cost: 0,
  offers: ["No description available."],
  bannerColor: "#fff",
  userType: "N/A",
}

export default PurchaseCard
