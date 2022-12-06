import styled from "styled-components"

const Services = () => {
  return (
    <ServicesWrapper>
      <h3>Movement Techniques</h3>
      <img
        className="service-img"
        src="https://media1.giphy.com/media/QYF7Cjn7NNEFmkWo2b/giphy.gif?cid=ecf05e47jjvyz1qa5cpgwrci8ep1m9thnaayzw2wsg9gqzdv&rid=giphy.gif&ct=g"
      />
      <h3>Aim Control</h3>
      <img
        className="service-img"
        src="https://media2.giphy.com/media/iciWusgKvCka8hIWVE/giphy.gif?cid=ecf05e47qlw4fm0mngajoutim54sts31dpm3g8moadu1zjwj&rid=giphy.gif&ct=g"
        alt="aim control"
      />
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.main`
  .service-img {
    width: 30rem;
    object-fit: contain;
    object-position: top;
  }
`

export default Services
