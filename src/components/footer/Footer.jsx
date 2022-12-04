import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner-footer"></div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  height: 30rem;
  background-color: hsl(var(--clr-black));
  overflow-x: auto;
`

export default Footer
