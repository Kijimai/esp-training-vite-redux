import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { navLinks } from "../../links"

const currentDate = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner-footer">
        <nav className="footer-nav">
          <ul className="footer-links">
            {navLinks.map((link, idx) => {
              const { name, path } = link
              return (
                <li key={idx}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <hr />
        <div className="copyright">
          <p>
            Copyright &copy; {currentDate} Legend Trainer LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  height: 20rem;
  background-color: hsl(var(--clr-black));
  overflow-x: auto;

  .inner-footer {
    hr {
      max-width: 70%;
      margin: 0 auto;
    }

    .footer-nav {
      padding: 2rem 0;
      .footer-links {
        display: flex;
        justify-content: center;
        gap: 1rem;

        a {
          color: hsl(var(--clr-white));
          font-size: 1.4rem;
          text-decoration: none;
        }
      }
    }

    .copyright {
      padding: 1rem 0;
      p {
        text-align: center;
        font-size: 1.4rem;
        color: hsl(var(--clr-white));
      }
    }
  }
`

export default Footer
