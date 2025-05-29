import dbConnect from "@/database/dbConnect";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(
      {
        success: true,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 404 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, username, email, password, phone, address, avatar } = body;
    if (!name || !username || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, username, email, and password are required",
        },
        { status: 400 }
      );
    }
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exists",
        },
        { status: 400 }
      );
    }
    const newUser = new User({
      name,
      username,
      email,
      password,
      phone,
      address,
      avatar: avatar || "/public/default.jpg",
      role: "user", // Default role
    });
    await newUser.save();
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create user",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
