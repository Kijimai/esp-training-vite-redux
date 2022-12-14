import styled from "styled-components"
import { servicesList } from "../links"
import { Link } from "react-router-dom"
import parse from "html-react-parser"

const Services = () => {
  return (
    <ServicesWrapper>
      <header>
        <h2>What we teach</h2>
        <p>
          Our coaches are masters at what they do, with their skills gained from
          experience and practice. Just ask us what you want to improve on, and
          we will get you there.
        </p>
      </header>
      <section>
        {servicesList.map((list, idx) => {
          const { title, description, imgLink } = list

          return (
            <div key={idx} className="service-item">
              <h3>{title}</h3>
              <div className="content">
                <aside>
                  <p>{parse(description)}</p>
                </aside>
                <div className="service-img">
                  <img src={imgLink} alt={title} />
                </div>
              </div>
            </div>
          )
        })}
        <footer>
          <p>
            So... are you ready to become a <b>legend?</b>
          </p>
          <Link to="../purchase" className="btn">
            View our Services
          </Link>
        </footer>
      </section>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.main`
  p {
    font-size: 1.6rem;
  }

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
    }
  }

  .service-item {
    color: hsl(var(--clr-white));
    margin-bottom: 5rem;
    h3 {
      text-align: center;
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }

    &:nth-child(2n + 1) {
      .content {
        aside {
          order: 2;
        }
        .service-img {
          order: 1;
        }
      }
    }

    .content {
      display: flex;
      justify-content: center;
      gap: 2rem;

      aside {
        display: flex;
        align-items: center;
        max-width: 40rem;
        p {
          padding: 1rem;
        }
      }

      .service-img {
        width: 50rem;
        img {
          display: block;
          width: 100%;
          height: 30rem;
          object-fit: cover;
          object-position: top;
        }
      }
    }
  }

  footer {
    color: hsl(var(--clr-white));
    text-align: center;
  }
`

export default Services
