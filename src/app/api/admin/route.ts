import dbConnect from '@/utils/db'
import Admin from '@/models/Admin'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'



export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const reqBody = await request.json()
        const { adminname, password } = reqBody;
        console.log(reqBody);
      

        const admin = await Admin.findOne({ adminname })
        if (!admin) {
            return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 })
        }

        const validPassword = await bcryptjs.compare(password, admin.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 })
        }
        // create token data
        const tokenData = {
            id: admin._id,
            adminname: admin.adminname,
            
        
        }
        // create token
        const adminToken = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: '30d',
        })

        const response = NextResponse.json({
            message: "user is logged in",

            success: true
        })
        response.cookies.set('token', adminToken, {
            httpOnly: true,
           
        }
        )
        return response





    } catch (err: any) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
