"use client";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2% auto;
  padding: 2%;
  width: 40%;
  text-align:center;
`
const StyledH1 = styled.h1`
  font-size: calc(2px + 2.5vw);
  font-weight:bold;
`
const StyledH3 = styled.h3`
  font-size: calc(2px + 1vw);
  color: #33CCCC;
`
const StyledLabel = styled.label`
  font-size: calc(2px + 1vw);
  font-weight: bold;
`
const StyledInput = styled.input`
  margin: 3% 0;
  background-color: transparent;
  border: 0.1px solid #E6E6E6;
  outline:none;

  &:focus {
    border-color: #33CCCC;
  }

  &:hover {
    border-color: #33CCCC;
  }

  &:user-invalid {
    border-color: red;
  }
`
const StyledButton = styled.button`
  border: 0.1px solid #E6E6E6;
  background-color: transparent;

  &:hover {
    border-color: #33CCCC;
    background-color: #142B50;
  }
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 750px) {
    margin-top: 5%;
    flex-direction: column;
  }
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
  input.setCustomValidity("");

  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }

  if(date>today.toISOString())
  {
    input.setCustomValidity("Date cannot be in the future.");
    input.reportValidity();
    return;
  }

  if(date<= "1995-06-16")
  {
    input.setCustomValidity("Date cannot be older than 1995-06-16.");
    input.reportValidity();
    return;
  }
  
  if(input.value.trim() !== ''){
    input.setCustomValidity("");
    window.location.href = "/"+date;
  }
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
          <StyledInput type ="date" id="input"></StyledInput>
          <StyledButton onClick={changeDateInput} >Search</StyledButton>
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
    </>
  )
}