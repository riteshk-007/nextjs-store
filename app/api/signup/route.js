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
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return NextResponse.json({
          message: "User already exists",
          status: 400,
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        if (user) {
          return NextResponse.json({
            status: 201,
            message: "User created successfully",
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Server error",
    });
  }
};
