import dbConnect from '@/utils/db'
import User from '@/models/User'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'



export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        console.log(reqBody);
        //check if user exists

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 })
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 })
        }
        // create token data
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        }
        // create token
        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: '30d',
        })

        const response = NextResponse.json({
            message: "user is logged in",

            success: true
        })
        response.cookies.set('token', token, {
            httpOnly: true,
        }
        )
        return response





    } catch (err: any) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
