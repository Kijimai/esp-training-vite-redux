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
        {/* Checklist of available services -- Pending */}
        <section>
          <h2>Our Coaches</h2>
          <ul>
            <li>1000+ hours of Apex Legends playtime</li>
            <li>Experience participating in ALGS and various tournaments</li>
            <li></li>
          </ul>
        </section>
        {/* End of Checklist */}
        {/* About Section */}
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            pariatur consectetur ad id architecto repudiandae optio nulla,
            adipisci, accusamus, possimus ab laborum a omnis maxime magnam
            numquam quod. Aliquid voluptas omnis repellendus laborum minus
            minima illo ad blanditiis? Error illo molestias accusantium
            perspiciatis corrupti ratione distinctio velit consectetur suscipit
            cupiditate?
          </p>
        </section>
        {/* End of About Section */}
        {/* What is offered and taught */}
        <section>
          <h2>What we teach</h2>
          <div className="teaching-container">
            <ul>
              <li>Movement techniques</li>
              <li>Aim Training and Recoil Control</li>
              <li>Positioning</li>
              <li>Ring Prediction</li>
              <li>Team composition</li>
            </ul>
          </div>
        </section>
        {/* End of Services offered */}

        {/* Testimonials Section Start */}
        <section>
          <h2>What legends have said about us</h2>
          {/* Carousel here? */}
        </section>
        {/* Testimonials End */}
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
        filter: drop-shadow(0.5rem 0.6rem 0.1rem #4444dd);
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
