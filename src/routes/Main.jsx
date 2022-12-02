import styled from "styled-components"
import { Link } from "react-router-dom"
import ctaImg from "../assets/images/cta-png.png"
const Main = () => {
  return (
    <>
      <MainWrapper>
        {/* Hero / CTA Section directing to Purchase Page */}
        <header className="cta">
          <div className="left">
            <h2>
              Do you have the <span>passion</span> to become a legend?
            </h2>
            <p>
              Legend trainer is the premiere platform for Apex Legends coaching
              and skill improvement. Our coaches are at the top of their game
              and ready to pass on their knowledge to the aspiring champions.
            </p>
            <Link className="btn" to="services">
              View our Services
            </Link>
          </div>
          <div className="right">
            <img
              className="hero-img"
              src={ctaImg}
              alt="apex legends champions gibraltar, bloodhound and wraith"
            />
          </div>
        </header>
        <section></section>
        {/* About Section */}
        {/* End of About Section */}

        {/* Checklist of available services -- Pending */}
        {/* End of Checklist */}
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.section`
  color: hsl(var(--clr-white));

  .cta {
    display: grid;
    grid-template-columns: minmax(30rem, 40rem) minmax(30rem, 1fr);

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h2 {
        font-size: 3rem;
        text-align: center;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .right {
      .hero-img {
        display: block;
        width: 100%;
        filter: drop-shadow(5rem, 3rem, 1rem, hsl(var(--clr-black)));
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .cta {
      grid-template-columns: 1fr;

      .left {
        text-align: center;
        align-items: center;
      }

      .right {
        
      }
    }
  }
`

export default Main
