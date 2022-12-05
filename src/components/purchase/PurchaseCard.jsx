import styled from "styled-components"
import { formatPrice } from "../../utils/helper"

const PurchaseCard = ({ title, cost, offers, bannerColor, userType }) => {
  return (
    <CardWrapper>
      <header>
        <h3>
          {title} / {formatPrice(cost)}
        </h3>
      </header>
      <ul>
        {offers.map((offer, idx) => {
          return <li key={idx}>{offer}</li>
        })}
      </ul>
      <footer>
        <button>Purchase</button>
      </footer>
    </CardWrapper>
  )
}

const CardWrapper = styled.article``

export default PurchaseCard
