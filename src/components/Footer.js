import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <div>
      <TeslaFooter>
        <li>
          <p>Tesla &copy; 2021</p>
        </li>
        <li>
          <p>Privacy & Legal</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
        <li>
          <p>Careers</p>
        </li>
        <li>
          <p>Get Newsletter</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Forums</p>
        </li>
        <li>
          <p>Locations</p>
        </li>
      </TeslaFooter>
    </div>
  )
}

const TeslaFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0;
  background-color: #fff;

  li {
    list-style: none;

    p {
      padding: 0.3rem 0.7rem;
      margin: 0 0.1rem;
      font-size: 1rem;
      font-weight: 400;
      opacity: 1;
      z-index: 1500;
      cursor: pointer;
      border-radius: 0.345rem;
      transition: all 0.4s ease-in-out;
      font-family: "Hind Madurai", sans-serif;

      @media screen and (max-width: 767px) {
        font-size: 0.65rem;
        padding: 0.3rem 0.5rem;
      }
    }
  }
`

export default Footer
