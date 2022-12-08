import { Splide, SplideSlide } from "@splidejs/react-splide"
import styled from "styled-components"
import { coachInfo } from "../links"

const splideOptions = {
  gap: "1rem",
  type: "fade",
  label: "Gallery of Legend Trainer coaches",
  perMove: 1,
  pagination: false,
  drag: false,
}

const Team = () => {
  return (
    <TeamWrapper>
      <header>
        <h2>Meet the Team</h2>
        <p>
          The best in the business, the best in the game. Our gaming backgrounds
          are diverse and the skills gained throughout our years of mastery
          carry over to the games we currently play.
        </p>
      </header>
      <section>
        <Splide options={splideOptions}>
          {coachInfo.map((coach) => {
            const { id, name, games, profileImg, imgAlt, description } = coach
            return (
              <SplideSlide key={id}>
                <div className="coach-profile">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <ul className="games-list">
                    {games.map((game, idx) => {
                      return <li key={idx}>{game}</li>
                    })}
                  </ul>
                </div>
                <div className="coach-image">
                  <img src={profileImg} alt={imgAlt} />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </section>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.main`
  header {
    color: hsl(var(--clr-white));
    text-align: center;
    margin-bottom: 5rem;

    h2 {
      margin-bottom: 1.8rem;
      font-size: 2.6rem;
    }

    p {
      margin: 0 auto;
      max-width: 80rem;
      font-size: 1.6rem;
    }
  }

  section {
    .splide {
      margin: 0 auto;
      max-width: 90rem;

      .splide__arrow {
        width: 5rem;
        height: 5rem;
        opacity: 1;
        background: hsl(var(--clr-white));

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
        display: grid;
        grid-template-columns: 40rem 1fr;
        .coach-profile {
          background-color: hsl(var(--clr-white));
          padding: 2rem;

          h3 {
            font-size: 3rem;
          }

          p {
            font-size: 1.5rem;
          }

          .games-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;

            li {
              padding: 1rem;
              background-color: hsl(var(--clr-q-red));
              color: hsl(var(--clr-white));
              border-radius: 0.6rem;
              font-size: 1.4rem;
            }
          }
        }

        .coach-image {
          img {
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
          }
        }
      }
    }
  }
`

export default Team
