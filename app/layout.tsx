import React from "react";
import './globals.css';
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height:100vh;
  background: radial-gradient(circle at center, #0B1D3F 0%, #050A1B 80%);
  position: relative;
  z-index:0;
`

const StyledHeader = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #142B50;
`

const StyledImg = styled.img`
  width: 7%;
  margin: 1% 2%;
`
const StyledPlanet = styled.div`
  position: fixed;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 110%;
  min-height: 100%;
  opacity: 0.4;
  pointer-events: none;
  background-image: url("./planet_earth.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`

export default function RootLayout(
  {children,}: Readonly<{children: React.ReactNode}>){
    return(
      <html lang ="en">
        <body>
          <StyledContainer>
            <StyledHeader>
              <StyledImg src="./logo_nasa.png" alt ="logo NASA"></StyledImg>
              <h1>Picture of the Day taken by NASA</h1>
            </StyledHeader>
            {children}
            <StyledPlanet></StyledPlanet>
          </StyledContainer>
        </body>
      </html>
    )
}