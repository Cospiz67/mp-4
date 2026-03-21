'use client'
import { useParams } from "next/navigation";
import { DataType } from "../types/DataType";
import { useState,useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";

const Card= styled.div`
    border: 1px solid rgba(255,255,255,0.2);
    padding: 40px;
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(4px);
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
        <Card>
            <h1>{data?.title} | {data?.date}</h1>
            <img src= {data?.url} alt={data?.title}></img>
            <p>{data?.explanation}</p>
        </Card>
    )
}
