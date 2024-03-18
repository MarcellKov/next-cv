import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers"
import jwt from "jsonwebtoken"

export function GET(req:NextRequest,res:NextResponse){
    
    return NextResponse.json({"ASD":req.cookies.get("jwt")},{status:200})
}

export function POST(req:NextRequest){
    var asd=jwt.sign("ASD", "123")
    cookies().set("jwt",asd)
    
    return NextResponse.json({"Success":"Success"},{status:200})
}