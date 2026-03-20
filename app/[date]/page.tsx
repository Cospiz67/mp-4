'use client'
import { useParams } from "next/navigation";
import { DataType } from "../types/DataType";
import { useState,useEffect } from "react";




export default function Date(){
    const params = useParams();

    const [data, setData] = useState<DataType[]>([]);
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

        }, [data.length]);
    return(
        <>
          <h1></h1>
        </>
    )
}
