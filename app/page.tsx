/*import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/

"use client";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2% auto;
  padding: 2%;
  width: 40%;
  text-align:center;
`
/*  border-radius: 20px;
  background-color: red;
  border: #33CCCC solid 2px;
`*/

const StyledH1 = styled.h1`
  font-size: calc(2px + 2.5vw);
  font-weight:bold;
`
const StyledH3 = styled.h3`
  font-size: calc(2px + 1vw);
  color: #33CCCC;
`
/*color: hsla(0, 3%, 19%, 0.95);
*/

const StyledLabel = styled.label`
  font-size: calc(2px + 1vw);
  font-weight: bold;
`

// const StyledPlanet = styled.div`
//   position: fixed;
//   bottom: -200px;
//   left: 50%;
//   transform: translateX(-50%);
//   min-width: 110%;
//   min-height: 100%;
//   opacity: 0.4;
//   pointer-events: none;
//   background-image: url("./planet_earth.png");
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   z-index: 0;
// `
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const StyledGroup = styled.div`
  display: flex;
  justify-content: center;
  text-align:center;
  margin: 0 auto;
`
const StyledCard = styled.button`
  padding:5% 2%;
  margin: 2%;
  border: 0.1px solid #E6E6E6;
  background-color: transparent;

  &:hover {
    border-color: #33CCCC;
    background-color: #142B50;
  }
`
const StyledString = styled.p`
  font-size: calc(2px + 1vw);
  margin-bottom: 7%;
`

const stringDates: string[] = ["Today", "Yesterday", "Day Before Yesterday"]
const arrayDates: Date[]= [];
const today = new Date();
for(let i= 0; i<3; i++){
  const d = new Date(today);
  d.setDate(today.getDate() - i); // to avoid problems with months and how many days they have
  arrayDates.push(d);
}

function changeDateInput(){
  const input = document.getElementById("input") as HTMLInputElement;
  const date = input.value;
  if(input.value.trim() !== '')
    window.location.href = "/"+date;
}

export default function Home(){
  return(
    <>
      <StyledDiv>
        <StyledH1>NASA Picture</StyledH1>
        <StyledH3>Type the date or select it to discover a picture!</StyledH3>
      </StyledDiv>
      <StyledWrapper>
        <StyledInputContainer>
          <StyledLabel htmlFor="Date selector">Date Selector:</StyledLabel>
          <input required type ="date" id="input"></input>
          <button onClick={changeDateInput} >Search</button>
        </StyledInputContainer>
        <StyledGroup>
          {
            arrayDates.map((date, index)=>{
              return(
                  <StyledCard key={index}
                    onClick={()=>window.location.href = "/"+date.toISOString().slice(0, 10)}>
                    <StyledString>{stringDates[index]}</StyledString>
                    <p>{date.toLocaleDateString()}</p>
                  </StyledCard>
              );
            })
          }
        </StyledGroup>
      </StyledWrapper>
      {/* <StyledPlanet></StyledPlanet> */}
    </>
  )
}