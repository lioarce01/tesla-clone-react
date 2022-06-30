import React, { useEffect, useState } from "react"
import styled from "styled-components"
import teslaLogo from "../images/Teslalogo.png"
import closeIcon from "../images/close.svg"

import { NavLinkAPI } from "./API.js"

const Navbar = () => {
  const [MenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <TeslaNav>
        <Navbrand>
          <img src={teslaLogo} alt="teslaLogo/img" />
        </Navbrand>
        <ul className="display-none">
          <li>
            <p>Model S</p>
          </li>
          <li>
            <p>Model 3</p>
          </li>
          <li>
            <p>Model X</p>
          </li>
          <li>
            <p>Model Y</p>
          </li>
          <li>
            <p>Solar Roof</p>
          </li>
          <li>
            <p>Solar Panels</p>
          </li>
        </ul>

        <ul>
          <li className="display-none">
            <p>Shop</p>
          </li>
          <li className="display-none">
            <p>Account</p>
          </li>
          <li>
            <p onClick={() => setIsMenuOpen(true)} className="btn-active">
              Menu
            </p>
          </li>
        </ul>
      </TeslaNav>
      <MobileNav show={MenuOpen}>
        <div className="close-icon">
          <img
            onClick={() => setIsMenuOpen(false)}
            src={closeIcon}
            alt="closeIcon/img"
          />
        </div>
        {NavLinkAPI &&
          NavLinkAPI.map((value, index) => (
            <li key={index}>
              <p>{value.links}</p>
            </li>
          ))}
      </MobileNav>
    </div>
  )
}

const TeslaNav = styled.nav`
  display: flex;
  min-height: 5vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 991px) {
    min-height: 9vh;
  }

  ul {
    display: flex;
    align-items: center;

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
          font-size: 0.8rem;
          padding: 0.3rem 0.5rem;
        }

        &:hover {
          color: #171a20;
          background-color: hsla(0, 0%, 50.2%, 0.125);
        }
      }
    }
  }
`

const Navbrand = styled.div`
  img {
    width: 130px;
    height: auto;
    object-fit: contain;
    opacity: 1;
  }
`

const MobileNav = styled.div`
  > .close-icon {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 2rem;
    padding-right: 1rem;
    width: 100%;

    img {
      width: 14px;
      height: auto;
      object-fit: contain;
      opacity: 1;
      z-index: 2000;
      cursor: pointer;
    }
  }

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 18.5rem;
  display: ${(props) => (props.show ? "flex" : "none")};
  min-height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0 1rem;
  background: #fff;
  overflow-y: hidden;
  opacity: 1;
  z-index: 2000;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);

  ::-webkit-scrollbar {
    display: none;
  }
  

  li {
      list-style: none;
      padding: 0.1rem 1rem;

      p {
        padding: 0.5rem 0.8rem;
        margin: 0 1rem;
        font-size: 1rem;
        font-weight: 500;
        opacity: 1;
        z-index: 1500;
        cursor: pointer;
        border-radius: 0.345rem;
        transition: all 0.4s ease-in-out;
        font-family: "Hind Madurai", sans-serif;

        @media screen and (max-width: 767px) {
          font-size: 0.8rem;
          padding: 0.3rem 0.5rem;
        }

        &:hover {
          color: #171a20;
          background-color: hsla(0, 0%, 50.2%, 0.125);
        }
      }
    }
  }
`

export default Navbar
