'use client'
import { useParams } from "next/navigation";
import useSWR from 'swr';
const params = useParams();

const {data,error} = useSWR(`./api/getNasaData?date=${params.date}`, 
    (url)=>
        fetch(url).then((res)=>res.json).catch((e)=> console.log("error: " +e))
);

export default function Date(){
    return(
        <>
          <h1>{data}</h1>
        </>
    )
}