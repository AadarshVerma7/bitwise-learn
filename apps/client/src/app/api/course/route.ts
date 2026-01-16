import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
       const backendUrl = process.env.BACKEND_URL;

       if(!backendUrl){
        return NextResponse.json(
            {error:"Backend URL not configured"},
            {status:500},
        );
       }

       const cookie = req.headers.get("cookie");
       
       const res = await fetch(`${backendUrl}/api/v1/courses/get-all-courses-by-admin`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            cookie: cookie || "",
        },
        cache:"no-store",
       });

       const data = await res.json();

       return NextResponse.json(data,{status:res.status});
    } catch (error:any) {
        console.log("Error Fetching Courses : ",error);
        return NextResponse.json(
            {message:"Failed to load Courses"},
            {status:500}
        );
    }
}