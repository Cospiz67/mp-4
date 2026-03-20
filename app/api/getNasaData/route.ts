import { NextRequest, NextResponse } from "next/server";

const NASA_API_KEY = process.env.NASA_API_KEY;
export async function GET(request:NextRequest){

    const date = request.nextUrl.searchParams.get("date");
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`);
    const results = await res.json();
    
    return NextResponse.json(results);
}