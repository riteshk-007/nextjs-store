import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = (req) => {
  const authToken = cookies().delete("authToken");
  if (authToken === undefined) {
    return NextResponse.json({
      message: "User logged out successfully",
      status: 200,
    });
  } else {
    return NextResponse.json({ message: "User not logged out", status: 401 });
  }
};
