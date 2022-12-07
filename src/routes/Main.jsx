import styled from "styled-components"
import { Link } from "react-router-dom"
import ctaImg from "../assets/images/cta-png.png"
import { teachings } from "../links"

// Api call to get randomized user portraits and names
// https://randomuser.me/api/?results=5

const Main = () => {
  return (
    <MainWrapper>
      {/* Hero / CTA Section directing to Purchase Page */}
      <header className="cta">
        <div className="left">
          <h2>
            Do you have the <span>passion</span> to become a legend?
          </h2>
          <p>
            Legend trainer is the premiere platform for Apex Legends coaching
            and skill improvement. Our coaches are at the top of their game and
            ready to pass on their knowledge to any aspiring champions.
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
      <section className="coaches">
        <h2>Our Coaches</h2>
        <div className="inner-coaches">
          <div className="left">
            <ul>
              <li>
                2000+ hours of Apex Legends playtime and other competitive FPS
                games
              </li>
              <li>Experience participating in ALGS and various tournaments</li>
              <li>Customer Satisfaction rating of 4+ stars</li>
            </ul>
          </div>
          <div className="right">
            <Link className="btn" to="team">
              Our Team
            </Link>
          </div>
        </div>
      </section>
      {/* End of Checklist */}
      {/* About Section */}
      <section>
        <h2>About Us</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur
          consectetur ad id architecto repudiandae optio nulla, adipisci,
          accusamus, possimus ab laborum a omnis maxime magnam numquam quod.
          Aliquid voluptas omnis repellendus laborum minus minima illo ad
          blanditiis? Error illo molestias accusantium perspiciatis corrupti
          ratione distinctio velit consectetur suscipit cupiditate?
        </p>
      </section>
      {/* End of About Section */}
      {/* What is offered and taught */}
      <section className="teachings" id="teachings">
        <h2>What we teach</h2>
        <div className="teachings-inner">
          <aside className="teachings-container left">
            {teachings.map((item, idx) => {
              const { text, content, icon } = item

              return (
                <div key={idx} className="single-teaching">
                  {icon}
                  <p className="teaching-title">{text}</p>
                  <div className="content">
                    <h3>{text}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              )
            })}
          </aside>
          <div className="right">
            <p className="description">
              Our coaches and trainers are at the top of their game, with every
              single day devoted to consistent improvement and investment
              towards the betterment of our mentees. We have coaches that
              specialize on one thing, and other more well-rounded for all types
              of scenarios in combat.
            </p>
          </div>
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
  )
}

const MainWrapper = styled.main`
  color: hsl(var(--clr-white));

  section {
    h2 {
      text-align: center;
      font-size: 2.6rem;
    }

    .description {
      font-size: 1.5rem;
    }
  }

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

  /* Teachings Section */

  .teachings {
    .teachings-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .left {
      order: 1;
    }

    .right {
      align-self: center;
      order: 2;
    }

    .teachings-container {
      display: grid;
      grid-template-columns: repeat(3, 14rem);
      grid-template-rows: repeat(3, 14rem);

      .single-teaching {
        position: relative;
        border-radius: 50%;
        border: 0.4rem solid white;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 0.8rem;

        svg {
          font-size: 3rem;
        }

        .teaching-title {
          font-size: 1.4rem;
          line-height: 1.1;
        }

        .content {
          background-color: hsl(var(--clr-white));
          padding: 2rem;
          color: hsl(var(--clr-black));
          min-width: 30rem;
          position: absolute;
          top: -15rem;
          right: -15rem;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          transition: 0.2s ease opacity;

          h3 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1.3rem;
          }
        }

        &:hover,
        &:focus {
          .content {
            opacity: 1;
          }
        }

        :nth-child(1) {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        :nth-child(2) {
          grid-column: 3 / 4;
          grid-row: 1 / 2;
        }

        :nth-child(3) {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }

        :nth-child(4) {
          grid-column: 1 / 2;
          grid-row: 3 / 4;
        }

        :nth-child(5) {
          grid-column: 3 / 4;
          grid-row: 3 / 4;
        }
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
