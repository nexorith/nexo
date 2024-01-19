import { getTokenData } from "@/helpers/getTokenData";
import { NextRequest, NextResponse } from "next/server";
import User  from "@/models/User";
import dbConnect from "@/utils/db";



export async function GET(request:NextRequest) {
    await dbConnect();
    try {
        const userId = await getTokenData(request);
        console.log(userId);
        const user = await User.findOne({_id: userId.id}).select("-password");
        return NextResponse.json({
            message: "user found",
            data: user,
        });
    } catch (err:any) {
        console.log("ERRORRRRRR");
        return NextResponse.json({error: err.message}, {status: 500});
    }
}