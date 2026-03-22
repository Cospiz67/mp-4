'use client'
import { useParams } from "next/navigation";
import { DataType } from "../types/DataType";
import { useState,useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";

const StyledContainer= styled.div`
    padding: 2%;
    display:flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`
const StyledTexts = styled.div`
    display:flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    max-width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        margin-top: 10%;
    }
`
const StyledH1 = styled.h1`
    color: #33CCCC;
    padding-bottom: 5%;
    margin: 0 auto;
`
const StyledP = styled.p`
    font-size: calc(2px + 1vw);
    font-family: Consolas, monospace;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        width:100%;
    }
`
const StyledCredits = styled.p`
    font-size: calc(2px + 0.7vw);
    font-family: Consolas, monospace;
    margin: 0 auto;
    padding: 2% 0 3%;
`
const StyledButton = styled.button`
    width: max-content;
    padding:3% 1%;
    margin: 2% auto;
    border: 0.1px solid #E6E6E6;
    background-color: transparent;
    font-size: calc(2px + 0.7vw);

    &:hover {
        border-color: #33CCCC;
        background-color: #142B50;
    }
`
const StyledImg = styled.img`
    max-width: 40%;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid #33CCCC;

    @media screen and (max-width: 750px) {
        margin-top: 10%;
    }
`

export default function Date(){
    const params = useParams();

    /*const [data, setData] = useState<DataType>();
    useEffect( ()=>{
        async function fetchData(){
        const res = await fetch(`./api/getNasaData?date=${params.date}`);
        const results = await res.json();
        setData(results);
        console.log(results);
        }
        fetchData()
        .then(()=> console.log("all good"))
        .catch((e)=> console.log("error: " +e));

        }, [data]);
        console.log("helloooooooooo");
        console.log("data: "+ data?.title);*/
    /*const {data, error} = useSWR(`./api/getNasaData?date=${params.date}`,
        (url)=> fetch(url).then((res)=>res.json())
    );*/
    const data= {
    "copyright": "Panther Observatory",
    "date": "2006-04-15",
    "explanation": "In this stunning cosmic vista, galaxy M81 is on the left surrounded by blue spiral arms.  On the right marked by massive gas and dust clouds, is M82.  These two mammoth galaxies have been locked in gravitational combat for the past billion years.   The gravity from each galaxy dramatically affects the other during each hundred million-year pass.  Last go-round, M82's gravity likely raised density waves rippling around M81, resulting in the richness of M81's spiral arms.  But M81 left M82 with violent star forming regions and colliding gas clouds so energetic the galaxy glows in X-rays.  In a few billion years only one galaxy will remain.",
    "hdurl": "https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c80.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Galaxy Wars: M81 versus M82",
    "url": "https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c25.jpg"
  };
    console.log(data);
    return(
        <StyledContainer>
            <StyledTexts>
                <StyledH1>{data?.title} | {data?.date}</StyledH1>
                <StyledP>{data?.explanation}</StyledP>
                <StyledCredits>Copyright: {data?.copyright}</StyledCredits>
                <StyledButton onClick={()=>window.location.href = "/"}>Return to Date Selector</StyledButton>
            </StyledTexts>
            <StyledImg src= {data?.url} alt={data?.title}></StyledImg>
        </StyledContainer>
    )
}
