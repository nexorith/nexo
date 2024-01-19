import User from '@/models/User'; 
import dbConnect from '@/utils/db';

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request:any) => {
  const { email, password, companyname , phone, address, name } = await request.json();

  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
    companyname,
    phone,
    address,
    name,
    
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};