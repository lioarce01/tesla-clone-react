import React from "react"
import Models from "./Home/Models"
import styled from "styled-components"

import bgImg from "./images/tesla-car-1.jpg"
import bgImg2 from "./images/tesla-car-2.jpg"
import bgImg3 from "./images/tesla-car-3.jpg"
import bgImg4 from "./images/tesla-car-4.jpg"
import bgImg5 from "./images/solar-panels.jpg"
import bgImg6 from "./images/solar-roof.jpg"
import bgImg7 from "./images/accessories.jpg"
import dropdown from "./images/down-arrow.svg"

const Home = () => {
  return (
    <div>
      <Main>
        <Models
          title="Model S"
          text="Order Onine for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg}
          dropdown={dropdown}
          ifDropDownExist
        />
        <Models
          title="Model Y"
          text="Order Onine for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg2}
        />
        <Models
          title="Model 3"
          text="Order Onine for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg3}
        />
        <Models
          title="Model X"
          text="Order Onine for Touchless Delivery"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          backgroundImg={bgImg4}
          ifblackColorExist
        />
        <Models
          title="Lowest Solar Panels in America"
          text="Money Back Guarantee"
          leftBtn="Order Now"
          rightBtn="Learn More"
          backgroundImg={bgImg5}
          ifblackColorExist
        />
        <Models
          title="Solar for New Roofs"
          text="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
          leftBtn="Order Now"
          rightBtn="Learn More"
          backgroundImg={bgImg6}
          ifblackColorExist
        />
        <Models
          title="Accesories"
          text=""
          leftBtn="Order Now"
          backgroundImg={bgImg7}
          ifblackColorExist
        />
      </Main>
    </div>
  )
}

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-align: initial;
  scroll-snap-type: mandatory;
`

export default Home
