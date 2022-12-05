// Page for pricing tiers
import styled from "styled-components"
import PurchaseCard from "../components/purchase/PurchaseCard"
import { purchaseTiers } from "../links"

const Purchase = () => {
  return (
    <PurchaseWrapper>
      {/* Pricing Tiers Section */}
      <section className="services">
        <header>
          <h2>Our Services</h2>
          <p>
            Basic to Deluxe tier are on a per purchase basis. The MVP tier is a
            month long training session of any day of your choosing.
          </p>
        </header>
        <div className="purchase-cards">
          {/* If user isnt logged in, redirect to sign up page when purchasing a plan */}
          {purchaseTiers.map((tier, idx) => {
            return <PurchaseCard key={idx} {...tier} />
          })}
        </div>
      </section>
    </PurchaseWrapper>
  )
}

const PurchaseWrapper = styled.main`
  .services {
    header {
      margin-bottom: 2rem;
      h2,
      p {
        color: hsl(var(--clr-white));
        text-align: center;
      }
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.6rem;
        max-width: 50rem;
        margin: 0 auto;
      }
    }
  }

  .purchase-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(30rem, 1fr));
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    article:nth-child(1) {
      grid-column: 1/2;
    }
    article:nth-child(2) {
      grid-column: 2/3;
    }
    article:nth-child(3) {
      grid-column: 3/4;
    }
    article:nth-child(4) {
      grid-column: 2/3;
    }
  }
`

export default Purchase
