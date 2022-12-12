import styled from "styled-components"
import { Link } from "react-router-dom"
import ctaImg from "../assets/images/cta-png.png"
import { teachings } from "../links"
import { coachSplash } from "../assets/images/images"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import axios from "axios"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import parse from "html-react-parser"
import { testimonialsList, teamStats } from "../links"

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
            <h3>Team stats: </h3>
            <ul>
              {teamStats.map((stat, idx) => {
                return <li key={idx}>{stat}</li>
              })}
            </ul>
          </div>
          <div className="right">
            <img src={coachSplash} alt="The legend trainer team" />
            <Link className="btn" to="team">
              Our Team
            </Link>
          </div>
        </div>
      </section>
      {/* End of Checklist */}
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
              specialize on one thing, with others being more well-rounded for
              all types of scenarios in combat.
            </p>
            <Link className="btn">Our Services</Link>
          </div>
        </div>
      </section>
      {/* End of Services offered */}

      {/* Testimonials Section Start */}
      <section className="testimonials">
        <h2>What legends have said about us</h2>
        <Splide
          options={{
            drag: false,
            autoplay: true,
            type: "loop",
            interval: 8000,
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false
          }}
        >
          {testimonialsList.map((testimonial, idx) => {
            const { review, user } = testimonial
            return (
              <SplideSlide key={idx}>
                <div className="testimonial">
                  <div className="quote">
                    <FaQuoteLeft />
                    <p>{parse(review)}</p>
                    <FaQuoteRight />
                  </div>
                  <p className="user">- {user}</p>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </section>
      {/* Testimonials End */}
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  color: hsl(var(--clr-white));

  section {
    margin-bottom: 8rem;

    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 4rem;
    }

    .description {
      font-size: 2.6rem;
    }
  }

  .cta {
    display: grid;
    grid-template-columns: minmax(30rem, 50rem) minmax(30rem, 1fr);

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h2 {
        font-size: 5rem;
        text-align: center;
        margin-bottom: 3rem;
        line-height: 1.2;
      }

      p {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .btn {
        margin: 0 auto;
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

  /* Coaches Section */

  .coaches {
    .inner-coaches {
      display: flex;
      gap: 4rem;

      .left {
        h3 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        ul {
          list-style: circle;
          font-size: 2.2rem;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }

        a {
        }
      }
    }
  }

  /* Teachings Section */

  .teachings {
    .teachings-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      justify-items: center;
      gap: 1rem;
    }

    .left {
      order: 1;
    }

    .right {
      align-self: center;
      order: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
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

  .testimonials {
    .splide {
      margin: 0 auto;
      max-width: 90rem;
      background-color: hsl(var(--clr-off-white));

      .splide__arrow {
        width: 5rem;
        height: 5rem;
        opacity: 1;

        &:disabled {
          opacity: 0.3;
        }

        &--prev {
          left: -6rem;
        }

        &--next {
          right: -6rem;
        }
      }

      .splide__slide {
        border-top: 0.4rem solid red;

        .testimonial {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 3rem;

          .quote {
            display: flex;
          }

          .user {
            text-align: right;
          }

          svg {
            color: black;
            width: 8rem;
          }

          p {
            color: hsl(var(--clr-black));
            font-size: 1.6rem;
          }
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
