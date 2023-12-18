import connectDB from "@/db/Database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connectDB();
  try {
    if (!name || !email || !password) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    } else {
      const isNewPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: isNewPassword,
      });
      if (user) {
        return NextResponse.json({
          status: 201,
          message: "User created successfully",
        });
      } else {
        return NextResponse.json({
          status: 400,
          message: "Something went wrong",
        });
      }
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: "Something went wrong",
    });
  }
};
