import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';


export const getTokenData = (request:NextRequest) => {

    try{
        const token = request.cookies.get('token')?.value || '';
        const tokenData:any = jwt.verify(token  , process.env.JWT_SECRET!);
        return tokenData;}
    catch(err:any){
        console.log(err);
        return null;
    }
}