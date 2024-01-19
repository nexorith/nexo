import User from '@/models/User'; 
import dbConnect from '@/utils/db';

import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request:NextRequest) {
  try{
   await dbConnect();
    const rewBody = await request.json();
    const { email, password, companyname , phone, address, name } = rewBody;

    const user = await User.findOne({email});

    if(user){
      return NextResponse.json({error:"Email is already in use"},{status:400});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
      companyname,
      phone,
      address,
      name,
      
      
    });
     const savedUser = await newUser.save();
     console.log(savedUser);
      return NextResponse.json({
        message:"user is registered",
        savedUser,
        success:true
      },{status:200
      });

      


  }catch(err:any){
    console.log(err);
    return NextResponse.json({error:err.message},{status:500})

    
      ;

  }
  
}








// export const POST = async(request:any) => {
//   const { email, password, companyname , phone, address, name } = await request.json();

//   await dbConnect();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);
//   const newUser = new User({
//     email,
//     password: hashedPassword,
//     companyname,
//     phone,
//     address,
//     name,
    
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("user is registered", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };