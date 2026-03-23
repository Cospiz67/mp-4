'use client'
import { useParams } from "next/navigation";
import { DataType } from "../types/DataType";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const StyledError= styled.div`
    text-align: center;
    margin: 10% auto;
`

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
const StyledLink = styled(Link)`
    width: max-content;
    padding:3% 1%;
    margin: 2% auto;
    border: 0.1px solid #E6E6E6;
    background-color: transparent;
    font-size: calc(2px + 0.7vw);
    text-decoration: none;
    display: flex;

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

const StyledVideo = styled.video`
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

    const {data, error}:{data:DataType, error: any} = useSWR(`./api/getNasaData?date=${params.date}`,
        (url)=> fetch(url).then((res)=>res.json().catch(error=><StyledError>There is an error: {error.message}</StyledError>))
    );

    if(error){
        return <StyledError>There is an error: {error.message}</StyledError>
    }

    if(data === null || data ===undefined){
        return(<StyledError>Loading...</StyledError>);
    }
    
    if( data.code === 400)
    {
        return(
            <>
                <StyledError>There is an error: {data.msg}</StyledError>
                <StyledLink href= "/">Return to Date Selector</StyledLink>
            </>
        )
    }

    const parts = (data.url).split('.');
    const extension = parts[parts.length-1];
    return(
        <StyledContainer>
            <StyledTexts>
                <StyledH1>{data.title} | {data.date}</StyledH1>
                <StyledP>{data.explanation}</StyledP>
                <StyledCredits>Copyright: {data.copyright ===undefined? "Not known":data.copyright}</StyledCredits>
                <StyledLink href= "/">Return to Date Selector</StyledLink>
            </StyledTexts>
            {
                extension ==="mp4"?<StyledVideo src= {data.url} controls autoPlay></StyledVideo>:<StyledImg src= {data.url} alt={data.title}></StyledImg>
            }
        </StyledContainer>
    )
}
